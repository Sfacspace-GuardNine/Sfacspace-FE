import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import MyLibraryBackButton from "@/components/my/MyLibraryBackButton";

export default function MeUserInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"container mx-auto max-w-[1314px] pb-[124px]"}>
        <MyLibraryBackButton />
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
            <div
              className={"text-[40px] font-medium leading-tight text-[#3F3F3F]"}
            >
              <span>Hello,</span>
              <br />
              {/* email 들어갈 곳 */}
              <span>example@email.com</span>
            </div>
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
      </div>
      <Footer />
    </>
  );
}
