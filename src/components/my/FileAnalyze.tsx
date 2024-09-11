import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TFileAnalyzeProps = { code?: string | null } & React.ComponentProps<"div">;

function AnalyzingState({ code }: { code: string | null }) {
  return <pre className={"whitespace-pre-wrap text-[#171717]"}>{code}</pre>;
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
        <pre>{code ? <AnalyzingState code={code} /> : <WaitState />}</pre>
      </div>
    </>
  );
}
