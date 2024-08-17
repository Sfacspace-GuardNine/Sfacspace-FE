import React from "react";

import LibraryFiles from "@/components/me/LibraryFiles";
import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function DetectedPage() {
  return (
    <>
      <MyLibraryBackButton />
      <div className={""}>
        {/* 검출 결과 라이브러리 */}
        <LibraryFiles />
      </div>
    </>
  );
}
