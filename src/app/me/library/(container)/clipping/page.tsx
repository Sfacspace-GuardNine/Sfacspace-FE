import React from "react";

import LibraryFiles from "@/components/me/LibraryFiles";
import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function ClippingPage() {
  return (
    <>
      <MyLibraryBackButton />
      {/* 스크랩 라이브러리 */}
      <div className={""}>
        <LibraryFiles />
      </div>
    </>
  );
}
