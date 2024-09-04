"use client";

import React, { useState } from "react";

import Image from "next/image";

import { cn } from "./../utils/cn";
import Button from "./Button";

type TAlertProps = {
  title: string;
  line: "1" | "2";
  text1: string;
  text2?: string;
  variant: "info" | "error" | "ing" | "complete";
  isShow: boolean;
  className?: string;
};

export default function Alert({
  title,
  line,
  text1,
  text2,
  variant,
  isShow,
  className,
}: TAlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const renderIcon = () => {
    switch (variant) {
      case "info":
        return (
          <Image
            src="/icons/hourglass-icon.svg"
            alt="검사 대기중"
            width={27}
            height={39}
            className="animate-spin"
          />
        );
      case "error":
        return (
          <Image
            src="/icons/alert-error-icon.svg"
            alt="얼럿 에러"
            width={39}
            height={39}
          />
        );
      case "ing":
        return (
          <Image
            src="/icons/ing-icon.svg"
            alt="얼럿 에러"
            width={36}
            height={36}
            className="animate-spin"
          />
        );
      case "complete":
        return (
          <Image
            src="/icons/alert-check-icon.svg"
            alt="얼럿 에러"
            width={39}
            height={39}
          />
        );
      default:
        return null;
    }
  };

  const renderButton = () => {
    if (!isShow) return null;

    switch (variant) {
      case "error":
        return (
          <Button className="font-Pretendard h-[58px] w-full py-[12px] font-medium">
            다시 시도하기
          </Button>
        );
      case "complete":
        return (
          <Button className="font-Pretendard h-[58px] w-full py-[12px] font-medium">
            결과 보러가기
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "font-Pretendard absolute z-50 flex w-[494px] rounded-[16px] bg-white p-8 shadow-[0_12px_42.5px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      <div className="flex gap-[18px]">
        <div className="flex w-12 items-start justify-center">
          {renderIcon()}
        </div>
        <div className="mt-[10px] w-[314px] font-medium">
          <p className="mb-4 text-[20px] font-medium">{title}</p>
          <div className="text-[20px] font-medium leading-7 tracking-tighter text-[#969696]">
            <p>{text1}</p>
            {line === "2" && text2 && <p>{text2}</p>}
          </div>

          <div className="mt-4">{renderButton()}</div>
        </div>
        <button
          className="flex cursor-pointer items-start p-[6px]"
          onClick={() => setIsVisible(false)}
        >
          <Image
            src="/icons/alert-x-icon.svg"
            alt="경고창 닫기"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
