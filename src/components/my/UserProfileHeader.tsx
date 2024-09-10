"use client";

import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import MyLibraryBackButton from "@/components/my/MyLibraryBackButton";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";
import usePopup from "@/hooks/usePopup";
import { TUser } from "@/type/user";

import Popup from "../Popup";

export default function UserProfileHeader() {
  const [user, setUser] = useState<TUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { handleLogOut } = useAuth();
  const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <MyLibraryBackButton />
      <div className={"flex w-full items-center justify-between"}>
        <div className={"flex gap-11"}>
          <Image
            width={107}
            height={107}
            src={user?.photoURL || "https://api.dicebear.com/9.x/identicon/svg"}
            alt={"avatar"}
            className={"rounded-full"}
          />
          <div
            className={"text-[40px] font-medium leading-tight text-[#3F3F3F]"}
          >
            <span>Hello,</span>
            <br />
            <span>{user?.email || "사용자 정보 없음"}</span>
          </div>
        </div>
        <Link href={""}>
          <Button
            variant={"outline"}
            className={"h-fit border-2 border-primary-500"}
            shape={"square"}
            size={"md"}
            onClick={openPopup}
          >
            로그아웃
          </Button>
        </Link>
      </div>

      <Popup.Container
        isShow={isOpen}
        onClose={closePopup}
        hasButtons={false}
        variant="large"
        hasBackground
      >
        <div className="flex flex-col items-center justify-center gap-[36px] pb-[21px]">
          <Image
            src={"/images/sign-out.svg"}
            alt={"로그 아웃"}
            width={48}
            height={48}
          />
          <p className="text-[28px] font-semibold text-[#3F3F3F]">
            정말 로그아웃 할까요?
          </p>
          <p className="text-center text-xl font-medium text-[#8F8F8F]">
            소스 코드 보안을 위하여 모든 히스토리와 코드 저장 내역이 삭제됩니다.
            <br />
            아래 버튼을 누르면 모든 데이터를 삭제하게 되고 로그아웃 처리가
            됩니다.
          </p>
        </div>
        <div className="flex w-full gap-[16px]">
          <button
            className="w-full rounded-[12px] bg-[#F1F1F1] py-[12px] text-[24px] font-medium text-[#C3C3C3]"
            onClick={closePopup}
          >
            닫기
          </button>
          <button
            className="w-full rounded-[12px] bg-primary-500 py-[12px] text-[24px] font-medium text-white"
            onClick={handleLogOut}
          >
            확인
          </button>
        </div>
      </Popup.Container>
    </div>
  );
}
