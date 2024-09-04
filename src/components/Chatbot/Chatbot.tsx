"use client";

import { useEffect, useRef, useState } from "react";

import ChatList from "@/components/Chatbot/ChatList";
import Floating from "@/components/Floating";

export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);
  const chatBotRef = useRef<HTMLDivElement>(null);

  const onClickFloatingButton = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (
        chatBotRef.current &&
        !chatBotRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [chatBotRef]);

  return (
    <>
      <div
        className={"fixed bottom-5 right-5 z-50 flex flex-col items-end gap-6"}
        ref={chatBotRef}
      >
        <ChatList className={`${isVisible ? "" : "hidden"}`} />
        <Floating onClick={onClickFloatingButton} />
      </div>
    </>
  );
}
