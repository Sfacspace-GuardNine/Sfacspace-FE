import Image from "next/image";

import { cn } from "@/utils/cn";

type TSecureAnalyzerProps = {
  code: string;
  isCompleted?: boolean;
};

function AnalyzingBox({ code }: TSecureAnalyzerProps) {
  return (
    <div className="flex min-h-[976px] w-full max-w-[729px] flex-col gap-[32px] rounded-[12px] border border-[#C3C3C3] p-[40px]">
      {code ? (
        <>
          <div className="flex h-[108px] flex-col items-center justify-between">
            <Image
              src={"./images/analyzing-icon.svg"}
              alt={"Analyzing"}
              width={40}
              height={40}
            />
            <div className="w-full max-w-[410px] rounded-[8px] border border-primary-500 bg-primary-50 p-[10px] text-center text-xl text-primary-500">
              <span>취약성 실시간 검사중</span>
            </div>
          </div>
          <div className="min-h-[760px] w-full">
            <pre className="whitespace-pre-wrap">
              <code>{code}</code>
            </pre>
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <Image
              src={"./images/glass-plus.svg"}
              alt={"Analyzing"}
              width={48}
              height={48}
            />
            <span className="text-[32px] text-primary-500">
              파일을 선택하세요
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultBox({ code, isCompleted }: TSecureAnalyzerProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[976px] w-full max-w-[729px] flex-col gap-[32px] overflow-hidden rounded-[12px] border border-[#C3C3C3] p-[40px]",
        isCompleted && "border-system-success",
      )}
    >
      {code ? (
        <>
          {isCompleted ? (
            <div className="flex h-[108px] flex-col items-center justify-between">
              <Image
                src={"./images/completed-icon.svg"}
                alt={"Analyzing"}
                width={40}
                height={40}
              />
              <div className="w-full max-w-[410px] rounded-[8px] border border-system-success bg-[#E5F8E5] p-[10px] text-center text-xl text-system-success">
                <span>분석 완료</span>
              </div>
            </div>
          ) : (
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-[44px]">
              <Image
                src={"./images/logo-bug2.svg"}
                alt={"Analyzing"}
                width={78.77}
                height={81}
              />
              <span className="text-[32px] font-bold">분석 대기 중</span>
            </div>
          )}
          <div
            className={cn("min-h-[760px] w-full", !isCompleted && "blur-sm")}
          >
            <pre className="whitespace-pre-wrap">
              <code>{code}</code>
            </pre>
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <Image
              src={"./images/folder-dashed.svg"}
              alt={"Analyzing"}
              width={48}
              height={48}
            />
            <span className="text-[32px]">분석할 파일이 없어요!</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SecureAnalyzer({
  code,
  isCompleted,
}: TSecureAnalyzerProps) {
  return (
    <div className="flex gap-[24px]">
      <AnalyzingBox code={code} />
      <ResultBox code={code} isCompleted={isCompleted} />
    </div>
  );
}
