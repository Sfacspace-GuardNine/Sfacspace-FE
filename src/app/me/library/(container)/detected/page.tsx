import React from "react";

import DetectedFiles from "@/components/me/DetectedFiles";
import LibrarySort from "@/components/me/LibrarySort";
import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function DetectedPage() {
  return (
    <>
      <MyLibraryBackButton />
      <div>
        {/* 검출 결과 라이브러리 */}
        <LibrarySort />
        <DetectedFiles />
      </div>
    </>
  );
}
