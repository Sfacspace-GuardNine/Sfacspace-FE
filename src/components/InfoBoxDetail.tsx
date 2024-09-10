import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

import EditedCode from "./EditedCode";
import InfoBoxDetailItem from "./InfoBoxDetailItem";

type TInfoBoxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "red" | "primary" | "gray";
  title: string;
  text: string;
  weakness: string;
  codeLanguage?: string;
  codeDetail?: string;
};

function InfoBoxDetail({
  variant = "primary",
  text = "",
  title,
  weakness,
  codeLanguage = "javascript",
  codeDetail,
}: TInfoBoxProps) {
  const boxClass = cn(
    "w-full rounded-[12px] p-5",
    variant === "red"
      ? "bg-background-redLight"
      : variant === "gray"
        ? "bg-background-grayLight"
        : "bg-background-purpleLight",
  );

  const headerClass = cn(
    "font-pretendard text-2xl font-semibold",
    variant === "red"
      ? "text-system-warning"
      : variant === "gray"
        ? "text-[#3F3F3F]"
        : "text-primary-500",
  );

  const buttonClass = cn(
    "h-[29px] w-[75px] rounded-[16px] border-[2px] font-semibold",
    variant === "red"
      ? "border-system-warning text-system-warning"
      : variant === "gray"
        ? "border-[#3F3F3F] text-[#3F3F3F]"
        : "border-primary-500 text-primary-500",
  );

  const splitTextIntoSentences = (text: string): string[] => {
    const sentences = text
      .split(/(?<=[.!?])\s+/) // 마침표, 물음표, 느낌표를 기준으로 쪼갬.
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0);

    return sentences;
  };

  const sentences = splitTextIntoSentences(text);

  return (
    <div className={boxClass}>
      <div className="flex gap-2">
        <p className={headerClass}>{title}</p>
        <button className={buttonClass}>위치보기</button>
      </div>
      <div className="pb-5">
        <ul className="mt-[10px] w-5/6">
          <li className="mb-[10px] ml-[30px] list-disc font-pretendard text-[18px] font-medium">
            취약점 : {weakness}
          </li>
          {sentences.map((item, index) => (
            <InfoBoxDetailItem key={index} text={item} variant={variant} />
          ))}
        </ul>
        <EditedCode language={codeLanguage} codeDetail={codeDetail} />
      </div>
    </div>
  );
}

export default InfoBoxDetail;
