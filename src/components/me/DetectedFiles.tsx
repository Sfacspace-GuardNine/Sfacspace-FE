import React from "react";

import Image from "next/image";

import DetectedCard from "@/components/DetectedCard";

export default function DetectedFiles() {
  return (
    <>
      <div className={"relative w-full"}>
        <div className={"grid grid-cols-4 gap-6"}>
          {/* 더미 데이터 */}
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />

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
