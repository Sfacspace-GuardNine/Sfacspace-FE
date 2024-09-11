"use client";

import React, { startTransition, useEffect, useState } from "react";

import Image from "next/image";
import { useFormState } from "react-dom";

import ChatText from "@/components/Chatbot/ChatText";
import {
  getChatbotList,
  getChatbotResponse,
  setChatbotList,
} from "@/server/chatbot.action";
import { TChatTextList } from "@/type/chatbot";
import { cn } from "@/utils/cn";

type TChatListProps = { uid: string } & React.ComponentProps<"div">;

export default function ChatList({ className, uid }: TChatListProps) {
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [state, formAction] = useFormState(getChatbotResponse, {
    message: "",
    status: false,
  });
  const [message, setMessage] = useState("");
  const [chatMessageList, setChatMessageList] = useState<TChatTextList[]>([]);

  const handleOnChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = async () => {
    try {
      const chatEntry = {
        isUser: true,
        timestamp: new Date(),
        message: message,
      };

      setChatMessageList((prev) => [...prev, chatEntry]);
      setMessage("");
      setIsChatLoading(true);

      await setChatbotList({ uid, ...chatEntry });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    startTransition(async () => {
      if (state.status) {
        const chatEntry = {
          isUser: false,
          timestamp: new Date(),
          message: state.message.trim(),
        };

        setChatMessageList((prev) => [...prev, chatEntry]);
        setIsChatLoading(false);

        await setChatbotList({ uid, ...chatEntry });
      }
    });
  }, [state]);

  useEffect(() => {
    const chatBody = document.querySelector("#chat_body");

    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [chatMessageList]);

  useEffect(() => {
    startTransition(async () => {
      await getChatbotList(uid).then((res) => {
        if (res) {
          setChatMessageList(res);
        }
      });
    });
  }, []);

  return (
    <>
      <div
        className={cn(
          "flex h-[726px] w-[558px] flex-col justify-between rounded-3xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]",
          className,
        )}
      >
        <div
          className={
            "flex items-center gap-[10px] rounded-t-3xl bg-primary-500 p-6 text-white"
          }
        >
          <Image
            src={"/icons/chat-icon.svg"}
            alt={"chat"}
            width={35}
            height={35}
          />
          <p className={"text-xl font-semibold"}>플로디텍터 운영자</p>
        </div>
        <div
          id={"chat_body"}
          className={"flex h-full flex-col gap-6 overflow-y-scroll px-5 py-6"}
        >
          {chatMessageList?.map((data, index) => (
            <ChatText time={data.timestamp} isUser={data.isUser} key={index}>
              {data.message}
            </ChatText>
          ))}
          {isChatLoading && <ChatText isUser={false}>...</ChatText>}
        </div>
        <div
          className={"w-full border border-transparent border-t-[#EEEFEF] p-5"}
        >
          <form
            className={
              "flex items-center gap-[10px] rounded-[41px] bg-[#F8F8F9] px-4 py-3"
            }
            action={formAction}
            onSubmit={handleOnSubmit}
          >
            <input
              name={"message"}
              value={message}
              onChange={handleOnChangeMessage}
              placeholder={"챗봇에게 궁금한 점을 물어보세요!"}
              className={"h-7 w-full bg-transparent focus:outline-none"}
            />
            <button
              type={"submit"}
              disabled={isChatLoading}
              className={
                "rounded-[34px] bg-primary-500 px-[14px] py-[10px] disabled:bg-neutral-20"
              }
            >
              <Image
                src={"/icons/chat-up.svg"}
                alt={"enter"}
                width={13.74}
                height={16.48}
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
