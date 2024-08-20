import React from "react";

import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <>
      <div
        className={"h-screen w-full bg-[url('/images/loginUi-pattern.svg')]"}
      >
        <main className={"container mx-auto flex h-full w-full max-w-[1314px]"}>
          <div className="flex w-full flex-col items-center justify-center gap-[50px] lg:flex-row lg:justify-around">
            <div
              className={
                "flex flex-col items-center justify-center gap-[20px] text-nowrap"
              }
            >
              <p className={"text-[60px] text-primary-500"}>Find your Flaw</p>
              <Button
                className={
                  "border-4 border-primary-500 bg-white px-[40px] py-0 text-[60px]"
                }
                variant="outline"
                shape="round"
              >
                Login
              </Button>
            </div>
            <Button
              size="md"
              shape="round"
              className="w-fit text-nowrap text-[28px]"
            >
              Github로 연동 로그인하기
            </Button>
            <Button
              size="md"
              shape="round"
              className="w-fit text-nowrap text-[28px]"
            >
              Github
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
