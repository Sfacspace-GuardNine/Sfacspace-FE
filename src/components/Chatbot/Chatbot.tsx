"use client";

import { useState } from "react";

import ChatHistory from "@/components/Chatbot/ChatHistory";
import Floating from "@/components/Floating";

export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);

  const onClickFloatingButton = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={"fixed bottom-5 right-5 z-50 flex flex-col items-end gap-6"}
      >
        {isVisible && <ChatHistory />}
        <Floating onClick={onClickFloatingButton} />
      </div>
    </>
  );
}
