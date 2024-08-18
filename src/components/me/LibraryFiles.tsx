import React from "react";

import Image from "next/image";

import FileCard from "@/components/FileCard";

export default function LibraryFiles() {
  const dummyData = [
    { label: "label", name: "sfacweb - 1", caption: "Caption" },
    { label: "label", name: "sfacweb - 2", caption: "Caption" },
    { label: "label", name: "sfacweb - 3", caption: "Caption" },
    { label: "label", name: "sfacweb - 4", caption: "Caption" },
    { label: "label", name: "sfacweb - 5", caption: "Caption" },
    { label: "label", name: "sfacweb - 6", caption: "Caption" },
    { label: "label", name: "sfacweb - 7", caption: "Caption" },
    { label: "label", name: "sfacweb - 8", caption: "Caption" },
    { label: "label", name: "sfacweb - 9", caption: "Caption" },
    { label: "label", name: "sfacweb - 10", caption: "Caption" },
    { label: "label", name: "sfacweb - 11", caption: "Caption" },
    { label: "label", name: "sfacweb - 12", caption: "Caption" },
  ];

  return (
    <>
      <div className={"gap-12"}>
        {/* 카드 영역 */}
        <div className={"relative w-full"} data-carousel={"static"}>
          {/* 데이터 */}
          <div className={"grid grid-cols-4 gap-x-6 gap-y-12"}>
            {dummyData.map((value, idx) => (
              <FileCard title={value.name} caption={value.caption} key={idx} />
            ))}
          </div>
          {/* 버튼 */}
          {/* prev */}
          <button
            type={"button"}
            className={
              "absolute start-[-26px] top-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white outline outline-1 outline-[#3F3F3F]"
            }
          >
            <Image
              src={"/icons/arrow-left.svg"}
              alt={"prev"}
              width={12}
              height={22}
            />
          </button>
          {/* next */}
          <button
            type={"button"}
            className={
              "absolute end-[-26px] top-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white outline outline-1 outline-[#3F3F3F]"
            }
          >
            <Image
              src={"/icons/arrow-right.svg"}
              alt={"prev"}
              width={12}
              height={22}
            />
          </button>
        </div>
      </div>
    </>
  );
}
