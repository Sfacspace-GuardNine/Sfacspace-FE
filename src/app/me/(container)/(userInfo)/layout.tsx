import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

export default function MeUserInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 현재 로그인 계정 */}
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
        <Link href={""}>
          <Button
            variant={"outline"}
            className={"h-fit border-2 border-primary-500"}
            shape={"square"}
            size={"md"}
          >
            로그아웃
          </Button>
        </Link>
      </div>
      <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />
      {children}
    </>
  );
}
