"use client";

import { useEffect, useRef, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import ChatList from "@/components/Chatbot/ChatList";
import Floating from "@/components/Floating";
import { auth } from "@/firebase";

export default function Chatbot() {
  const [uid, setUid] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const chatBotRef = useRef<HTMLDivElement>(null);

  const onClickFloatingButton = () => {
    setIsChatVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (
        chatBotRef.current &&
        !chatBotRef.current.contains(e.target as Node)
      ) {
        setIsChatVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [chatBotRef]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      if (curUser) {
        setUid(curUser.uid);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={
            "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-6"
          }
          ref={chatBotRef}
        >
          <ChatList className={`${isChatVisible ? "" : "hidden"}`} uid={uid} />
          <Floating onClick={onClickFloatingButton} />
        </div>
      )}
    </>
  );
}
