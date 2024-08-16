import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

import InfoBoxDetailItem from "./InfoBoxDetailItem";

type TInfoBoxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "red" | "primary" | "gray";
  text: string[];
};

function InfoBoxDetail({ variant = "primary", text }: TInfoBoxProps) {
  const boxClass = cn(
    "w-[1486px] rounded-[12px]",
    variant === "red"
      ? "bg-background-redLight"
      : variant === "gray"
        ? "bg-background-grayLight"
        : "bg-background-purpleLight",
  );

  const headerClass = cn(
    "pl-5 pt-5 text-2xl font-semibold",
    variant === "red"
      ? "text-system-warning"
      : variant === "gray"
        ? "text-[#3F3F3F]"
        : "text-primary-500",
  );

  const buttonClass = cn(
    "ml-2 mt-[22.5px] rounded-[16px] border-[2px] px-1 font-semibold leading-[19px]",
    variant === "red"
      ? "border-system-warning text-system-warning"
      : variant === "gray"
        ? "border-[#3F3F3F] text-[#3F3F3F]"
        : "border-primary-500 text-primary-500",
  );

  const isSingleLine = text.length === 1; // 두 줄이상일 경우 list마크를 넣기 위함

  return (
    <div className={boxClass}>
      <div className="flex">
        <p className={headerClass}>문제코드</p>
        <button className={buttonClass}>위치보기</button>
      </div>
      <div className="pb-5 pl-10">
        <ul className={isSingleLine ? "" : "list-disc"}>
          {text.map((item, index) => (
            <InfoBoxDetailItem key={index} text={item} variant={variant} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InfoBoxDetail;
