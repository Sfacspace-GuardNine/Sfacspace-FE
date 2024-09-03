"use client";

import React from "react";

import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { auth } from "@/firebase";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const { displayName, email, photoURL } = user;
      console.log(displayName, email, photoURL);

      const token = await result.user.getIdToken();

      // 쿠키에 토큰 저장
      await fetch("/api/setCookie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      router.push("/my/library");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={
          "h-screen w-full bg-[url('/images/loginUi-pattern.svg')] bg-cover bg-no-repeat"
        }
      >
        <main className={"container mx-auto flex h-full w-full max-w-[1314px]"}>
          <div className="flex w-full flex-col items-center justify-center gap-[50px] lg:flex-row lg:justify-around">
            <div
              className={
                "flex flex-col items-center justify-center gap-[20px] text-nowrap"
              }
            >
              <p className={"text-[60px] text-primary-500"}>Find your Flaw</p>
              <div
                className={
                  "rounded-full border-4 border-primary-500 bg-white px-[40px] py-0 text-[60px] text-primary-500"
                }
              >
                Login
              </div>
            </div>
            <Button
              size="md"
              shape="round"
              className="w-fit text-nowrap text-[28px]"
              onClick={handleLogin}
            >
              Github로 연동 로그인하기
            </Button>
            <Button
              size="md"
              shape="round"
              className="w-fit text-nowrap text-[28px]"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              Github
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
