import React from "react";

import LibraryFiles from "@/components/me/LibraryFiles";
import LibrarySort from "@/components/me/LibrarySort";
import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function DetectedPage() {
  return (
    <>
      <MyLibraryBackButton />
      <div className={""}>
        {/* 검출 결과 라이브러리 */}
        <LibrarySort />
        <LibraryFiles />
      </div>
    </>
  );
}
