import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import ClippingFiles from "@/components/me/ClippingFiles";
import LibrarySort from "@/components/me/LibrarySort";
import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function ClippingPage() {
  return (
    <>
      <MyLibraryBackButton />
      {/* 스크랩 라이브러리 */}
      <div>
        <LibrarySort />
        <ClippingFiles />

        {/* 더보기 버튼 */}
        <div className={"flex w-full justify-center"}>
          <Button
            variant={"outline"}
            className={"mt-32 flex items-center gap-1 border-primary-500"}
          >
            더보기
            <Image
              src={"/icons/plus-icon.svg"}
              alt={"more"}
              width={18}
              height={18}
            />
          </Button>
        </div>
      </div>
    </>
  );
}
