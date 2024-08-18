import React from "react";

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
      </div>
    </>
  );
}
