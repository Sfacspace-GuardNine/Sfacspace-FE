import React from "react";

import TitleDefault from "@/components/TitleDefault";
import LibraryFiles from "@/components/me/LibraryFiles";

export default function DetectedPage() {
  return (
    <>
      <div className={"mt-[72px] flex justify-center"}>
        <TitleDefault link={"/me/profile"}>Detected Files</TitleDefault>
      </div>
      <div className={"py-[124px]"}>
        {/* 라이브러리 */}
        <LibraryFiles />
      </div>
    </>
  );
}
