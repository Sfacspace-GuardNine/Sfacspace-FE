import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TFileAnalyzeProps = { code?: string } & React.ComponentProps<"div">;

function AnalyzingState({ code }: { code: string }) {
  return (
    <>
      <div className={"flex w-full flex-col items-center gap-6"}>
        <Image
          src={"/images/analyzing-icon.svg"}
          alt={"analyzing"}
          width={40}
          height={40}
        />
        <div
          className={
            "flex h-11 w-full max-w-[410px] items-center justify-center rounded-lg border border-primary-500 bg-primary-50 text-xl text-primary-500"
          }
        >
          취약성 실시간 검사중
        </div>
      </div>

      {/* 코드 영역 */}
      <pre className={"whitespace-pre-wrap text-[#171717]"}>{code}</pre>
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
          src={"/images/glass-plus.svg"}
          alt={"Analyzing"}
          width={48}
          height={48}
        />
        <p className={"text-[32px] font-medium text-primary-500"}>
          파일을 선택하세요
        </p>
      </div>
    </>
  );
}

export default function FileAnalyze({ className, code }: TFileAnalyzeProps) {
  return (
    <>
      <div
        className={cn(
          "flex min-h-[976px] w-full flex-col gap-8 rounded-lg border border-[#B3B3B3] p-10",
          className,
        )}
      >
        {code ? <AnalyzingState code={code} /> : <WaitState />}
      </div>
    </>
  );
}
