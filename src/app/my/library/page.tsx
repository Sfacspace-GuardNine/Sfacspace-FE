import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import LibraryFiles from "@/components/my/LibraryFiles";
import SortFiles from "@/components/my/SortFiles";

export default function MyLibraryPage() {
  return (
    <>
      <div
        className={
          "mt-[13px] bg-[url('/images/mylibrary-pattern.svg')] bg-no-repeat"
        }
      >
        <main className={"container mx-auto max-w-[1314px]"}>
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
                {/* 기능 개발 시, 컴포넌트 분리 예정 */}
                <div
                  className={
                    "text-[40px] font-medium leading-tight text-[#3F3F3F]"
                  }
                >
                  <span>Hello,</span>
                  <br />
                  {/* email 들어갈 곳 */}
                  <span>example@email.com</span>
                </div>
              </div>
              <Link href={"/my/profile"}>
                <Button
                  variant={"outline"}
                  className={"h-fit border-2 border-primary-500 bg-white"}
                  shape={"square"}
                  size={"md"}
                >
                  프로필 정보
                </Button>
              </Link>
            </div>
            <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

            {/* 라이브러리 */}
            <SortFiles />
            <LibraryFiles />
          </div>
        </main>
      </div>
    </>
  );
}
