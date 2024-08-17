import React from "react";

export default function LibraryFiles() {
  return (
    <>
      <div className={"gap-12"}>
        <div>
          <p className={"text-[32px] font-medium text-[#3F3F3F]"}>Library</p>
          {/* 드랍박스 영역 */}
          <div className={"gap-1"}></div>
        </div>
        {/* 카드 영역 */}
        <div className={"grid grid-cols-3 gap-x-6 gap-y-[48px]"}></div>
      </div>
    </>
  );
}
