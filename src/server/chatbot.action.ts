"use server";

import { cookies } from "next/headers";

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
