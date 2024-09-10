"use server";

import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { cookies } from "next/headers";

import { db } from "@/firebase";
import { TChatTextList } from "@/type/chatbot";

async function setChatbotToken() {
  const hasToken = cookies().has("chatbot-token");

  if (hasToken) return cookies().get("chatbot-token")?.value;

  const authUrl = process.env.CHATBOT_TOKEN_URL!;
  const account = JSON.parse(process.env.CHATBOT_ACCOUNT!);
  const authBody = new FormData();

  Object.keys(account).forEach((key) => authBody.append(key, account[key]));

  const newToken = await fetch(authUrl, {
    method: "POST",
    headers: { contentType: "multipart/form-data" },
    body: authBody,
  })
    .then((res) => res.json())
    .then((res) => res.access_token)
    .catch((err) => console.error(err));

  cookies().set({
    name: "chatbot-token",
    value: newToken,
    httpOnly: true,
    maxAge: 1800,
  });

  return newToken;
}

export async function getChatbotResponse(
  state: { message: string; status: boolean },
  formData: FormData,
) {
  const generateUrl = process.env.CHATBOT_GENERATE_URL!;
  const token = await setChatbotToken();

  return await fetch(generateUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_message: formData.get("message"),
      temperature: 0.9,
      top_p: 0.9,
    }),
  }).then(async (res) => {
    if (!res.ok) return { message: "Error: Response Error!", status: false };

    return { message: await res.text(), status: true };
  });
}

function timestampToDate(timestamp: {
  nanoseconds: number;
  seconds: number;
}): Date {
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
}

export async function getChatbotList(uid: string) {
  const docRef = doc(db, "chatbotLogs", uid);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      return docSnap
        .data()
        .messages.map(
          (item: {
            timestamp: { seconds: number; nanoseconds: number };
            message: string;
            is_user: boolean;
          }) => {
            const newItem = { ...item };

            return {
              isUser: newItem.is_user,
              message: newItem.message,
              timestamp: timestampToDate(newItem.timestamp),
            };
          },
        );
    }
  } catch (err) {
    console.error(err);
  }
}

export async function setChatbotList({
  uid,
  isUser,
  message,
  timestamp,
}: {
  uid: string;
} & TChatTextList) {
  try {
    const listRef = doc(db, "chatbotLogs", uid);

    const chatEntry = {
      is_user: isUser,
      message: message,
      timestamp: timestamp,
    };

    await setDoc(
      listRef,
      { uid: uid, messages: arrayUnion(chatEntry) },
      { merge: true },
    );
  } catch (err) {
    console.error(err);
  }
}
