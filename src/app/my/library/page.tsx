"use client";

import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import LibraryFiles from "@/components/my/LibraryFiles";
import SortFiles from "@/components/my/SortFiles";
import { auth } from "@/firebase";
import { TUser } from "@/type/user";

export default function MyLibraryPage() {
  const [user, setUser] = useState<TUser>(null);

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
    });

    return () => unsubscribe();
  }, []);

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
            <div
              className={
                "flex w-full items-center justify-between rounded-[42px] bg-[#F3F3F3] p-[32px]"
              }
            >
              <div className={"flex gap-11"}>
                <Image
                  width={107}
                  height={107}
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://api.dicebear.com/9.x/identicon/svg"
                  }
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
                  <span>{user ? user.email : "로딩중..."}</span>
                </div>
              </div>
              <Link href={"/my/profile"}>
                <Image
                  src={"/images/arrow_right.svg"}
                  alt={"Analyzing"}
                  width={40}
                  height={40}
                />
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
