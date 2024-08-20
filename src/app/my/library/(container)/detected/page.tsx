import React from "react";

import DetectedFiles from "@/components/my/DetectedFiles";
import MyLibraryBackButton from "@/components/my/MyLibraryBackButton";
import SortFiles from "@/components/my/SortFiles";

export default function DetectedPage() {
  return (
    <>
      <MyLibraryBackButton />
      <div>
        {/* 검출 결과 라이브러리 */}
        <SortFiles />
        <DetectedFiles />
      </div>
    </>
  );
}
