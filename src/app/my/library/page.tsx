"use client";

import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import LibraryFiles from "@/components/my/LibraryFiles";
import SortFiles from "@/components/my/SortFiles";
import { auth } from "@/firebase";
import useGitRepoStore from "@/stores/useGitRepoStore";
import { TUser } from "@/type/user";

export default function MyLibraryPage() {
  const [user, setUser] = useState<TUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { repositories, fetchRepositories } = useGitRepoStore();

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

  useEffect(() => {
    const fetchData = async () => {
      await fetchRepositories();
    };

    fetchData();
  }, [fetchRepositories]);

  const reposData = repositories.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    created_at: repo.created_at,
    owner: repo.owner.login,
  }));

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <div
        className={
          "mt-[13px] bg-[url('/images/mylibrary-pattern.svg')] bg-no-repeat"
        }
      >
        <main className={"container mx-auto max-w-[1314px]"}>
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
                    user?.photoURL ||
                    "https://api.dicebear.com/9.x/identicon/svg"
                  }
                  alt={"avatar"}
                  className={"rounded-full"}
                />
                <div
                  className={
                    "text-[40px] font-medium leading-tight text-[#3F3F3F]"
                  }
                >
                  <span>Hello,</span>
                  <br />
                  <span>{user?.email}</span>
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

            <SortFiles />
            <LibraryFiles repos={reposData} />
          </div>
        </main>
      </div>
    </>
  );
}
