import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import GnbTitle from "@/components/GnbTitle";
import TitleDefault from "@/components/TitleDefault";

export default function ProfilePage() {
  return (
    <>
      <div className={"flex justify-center pb-[124px]"}>
        <TitleDefault link={"/me"}>Profile Information</TitleDefault>
      </div>
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
            example{}
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
      <div className={"text-[#3F3F3F]"}>
        {/* 내 정보 */}
        <p className={"pb-12 text-[32px] font-semibold"}>내 정보</p>
        <div className={"flex flex-col gap-4"}>
          <span className={"font-medium] text-[24px]"}>계정</span>
          {/* 임시 input */}
          <input className={"h-[51px] w-[866px] bg-primary-50"} />
        </div>
        <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />
        {/* 라이브러리 */}
        <p className={"pb-12 text-[32px] font-semibold"}>라이브러리</p>
        <div className={"flex flex-col gap-4"}>
          <GnbTitle href={""}>검출된 파일</GnbTitle>
          <GnbTitle href={""}>스크랩</GnbTitle>
        </div>
      </div>
      <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />
      {/* 설정 등 */}
    </>
  );
}
