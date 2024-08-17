"use client";

import React from "react";

import { usePathname } from "next/navigation";

import TitleDefault from "@/components/TitleDefault";

export default function MyLibraryBackButton() {
  const pathname = usePathname();
  const title = {
    profile: { title: "Profile Information", link: "/me" },
    detected: { title: "Detected Files", link: "/me/profile" },
    clipping: { title: "Clipping Article", link: "/me/profile" },
    setting: { title: "Setting", link: "/me/profile" },
  };
  const curPath = pathname.split("/")[2] as keyof typeof title;

  return (
    <>
      <div className={"mb-[124px] mt-[72px] flex justify-center"}>
        <TitleDefault link={title[curPath] ? title[curPath].link : ""}>
          {title[curPath] ? title[curPath].title : ""}
        </TitleDefault>
      </div>
    </>
  );
}
