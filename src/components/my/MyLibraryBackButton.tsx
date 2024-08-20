"use client";

import React from "react";

import { usePathname } from "next/navigation";

import TitleDefault from "@/components/TitleDefault";

export default function MyLibraryBackButton() {
  const pathname = usePathname();
  const title = {
    profile: { title: "Profile Information", link: "/my/library" },
    detected: { title: "Detected Files", link: "/my/profile" },
    clipping: { title: "Clipping Article", link: "/my/profile" },
    setting: { title: "Setting", link: "/my/profile" },
    help: { title: "Customer Service center", link: "/my/profile" },
  };
  const curPath = pathname.split("/").pop() as keyof typeof title;

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
