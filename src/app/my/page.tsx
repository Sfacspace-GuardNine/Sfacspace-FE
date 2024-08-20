import React from "react";

import Link from "next/link";

import Button from "@/components/Button";

export default function MyPage() {
  return (
    <>
      <div
        className={
          "mt-[13px] bg-[url('/images/mylibrary-pattern.svg')] bg-no-repeat"
        }
      >
        <main className={"container mx-auto max-w-[1314px] pb-[124px]"}>
          {/* 상단 */}
          <div
            className={
              "flex w-full flex-col items-center gap-[60px] pt-[69px] text-center text-[60px] text-primary-500"
            }
          >
            <div className={"flex flex-col items-center gap-5"}>
              <p className={"font-light"}>containing code files</p>
              <p
                className={
                  "w-fit rounded-full px-10 outline outline-4 outline-primary-500"
                }
              >
                MY Library
              </p>
            </div>

            <div className={"flex flex-col items-center gap-[22px]"}>
              <p className={"text-xl"}>
                깃허브와 연동하여 내 코드 파일을 불러오세요.
              </p>
              <Link href={"/login"}>
                <Button
                  size={"lg"}
                  shape={"round"}
                  className={"w-fit text-[28px]"}
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
