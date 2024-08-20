import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TResultAnalyze = {
  code?: string;
  state?: "result" | "pending";
};

function ResultState({ code }: { code: string }) {
  return (
    <>
      <div
        className={
          "flex min-h-[976px] w-full flex-col gap-8 rounded-lg p-10 outline outline-1"
        }
      >
        <div className={"flex flex-col items-center justify-center gap-8"}>
          <Image
            src={"/images/completed-icon.svg"}
            alt={"Analyzing"}
            width={40}
            height={40}
          />
          <div
            className={
              "flex h-11 w-full max-w-[410px] items-center justify-center rounded-lg border border-system-success bg-[#E5F8E5] text-xl text-system-success"
            }
          >
            분석 완료
          </div>
        </div>

        {/* 코드 영역 */}
        <pre className={"text-[#171717]"}>{code}</pre>
      </div>
    </>
  );
}

function PendingState({ code }: { code: string }) {
  return (
    <>
      <div
        className={
          "absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-11"
        }
      >
        <Image
          src={"/images/logo-bug2.svg"}
          alt={"Analyzing"}
          width={78.77}
          height={81}
        />
        <p className={"text-[32px] font-bold"}>분석 대기 중</p>
      </div>

      {/* 코드 영역 */}
      <pre className={"select-none pt-[64px] blur-sm"}>{code}</pre>
    </>
  );
}

function WaitState() {
  return (
    <>
      <div
        className={
          "flex h-full w-full flex-col items-center justify-center gap-8"
        }
      >
        <Image
          src={"/images/folder-dashed.svg"}
          alt={"Analyzing"}
          width={48}
          height={48}
        />
        <p className={"text-[32px] font-medium"}>파일을 선택하세요</p>
      </div>
    </>
  );
}

export default function ResultAnalyze({
  code = "",
  state = "pending",
}: TResultAnalyze) {
  return (
    <>
      <div
        className={cn(
          "flex min-h-[976px] w-full flex-col gap-8 rounded-lg p-10 outline outline-1 outline-[#B3B3B3]",
          { relative: code },
          { "outline-system-success": state === "result" && code },
        )}
      >
        {code ? (
          state === "result" ? (
            <ResultState code={code} />
          ) : (
            <PendingState code={code} />
          )
        ) : (
          <WaitState />
        )}
      </div>
    </>
  );
}
