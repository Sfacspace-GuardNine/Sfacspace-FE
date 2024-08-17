import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import LibraryFiles from "@/components/me/LibraryFiles";

export default function MyLibraryPage() {
  return (
    <>
      <div
        className={
          "mt-[13px] bg-[url('/images/mylibrary-pattern.svg')] bg-center"
        }
      >
        <div className={"container mx-auto max-w-[1314px]"}>
          {/* 상단 */}
          <div
            className={
              "flex w-full flex-col items-center gap-5 pt-[69px] text-center text-[60px] text-primary-500"
            }
          >
            <p className={"font-light"}>containing code files</p>
            <p
              className={
                "w-fit rounded-full px-10 outline outline-4 outline-primary-500"
              }
            >
              MY Library
            </p>
          </div>
          <div className={"py-[124px]"}>
            {/* 계정 */}
            <div className={"flex w-full items-center justify-between"}>
              <div className={"flex gap-11"}>
                <Image
                  width={107}
                  height={107}
                  src={"https://api.dicebear.com/9.x/identicon/svg"}
                  alt={"avatar"}
                  className={"rounded-full"}
                />
                <span className={"text-[40px] font-medium text-[#3F3F3F]"}>
                  Hello,
                  <br />
                  {/* email 들어갈 곳 */}
                  {}
                </span>
              </div>
              <Link href={"/me/profile"}>
                <Button
                  variant={"outline"}
                  className={"h-fit border-2 border-primary-500"}
                  shape={"square"}
                  size={"md"}
                >
                  프로필 정보
                </Button>
              </Link>
            </div>
            <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

            {/* 라이브러리 */}
            <LibraryFiles />
          </div>
        </div>
      </div>
    </>
  );
}
