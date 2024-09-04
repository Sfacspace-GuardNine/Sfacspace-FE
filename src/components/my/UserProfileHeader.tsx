"use client";

import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import MyLibraryBackButton from "@/components/my/MyLibraryBackButton";
import { auth } from "@/firebase";
import { TUser } from "@/type/user";

export default function UserProfileHeader() {
  const router = useRouter();
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

  const handleLogOut = async () => {
    const isOk = confirm("로그아웃 하시겠습니까?");
    if (isOk) {
      await auth.signOut();

      await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
    }
  };

  return (
    <div>
      <MyLibraryBackButton />
      <div className={"flex w-full items-center justify-between"}>
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
          <div
            className={"text-[40px] font-medium leading-tight text-[#3F3F3F]"}
          >
            <span>Hello,</span>
            <br />
            <span>{user ? user.email : "로딩중..."}</span>
          </div>
        </div>
        <Link href={""}>
          <Button
            variant={"outline"}
            className={"h-fit border-2 border-primary-500"}
            shape={"square"}
            size={"md"}
            onClick={handleLogOut}
          >
            로그아웃
          </Button>
        </Link>
      </div>
    </div>
  );
}
