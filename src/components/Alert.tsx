"use client";

import React, { ButtonHTMLAttributes, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "./../utils/cn";
import Button from "./Button";

type TAlertProps = {
  variant: "info" | "error" | "ing" | "complete";
  isShow: boolean;
  buttonChild?: React.ReactNode;
  linkHref?: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
};

const variantSettings = {
  info: {
    title: "검사 대기중",
    line: "1",
    text1: "순차적으로 파일 검사가 진행됩니다.",
    text2: "잠시만 대기해주시면 검사가 시작됩니다.",
    icon: "/icons/hourglass-icon.svg",
    iconClassName: "animate-spin",
  },
  error: {
    title: "Error",
    line: "2",
    text1: "오류가 발생했습니다.",
    text2: "다시 시도해주세요.",
    icon: "/icons/alert-error-icon.svg",
    iconClassName: null,
  },
  ing: {
    title: "검사 중",
    line: "1",
    text1: "코드가 많을수록 처리시간이 길어집니다.",
    icon: "/icons/ing-icon.svg",
    iconClassName: "animate-spin",
    text2: null,
  },
  complete: {
    title: "프로젝트 검사 완료",
    line: "1",
    text1: "검사결과를 확인해보세요.",
    text2: null,
    icon: "/icons/alert-check-icon.svg",
    iconClassName: null,
  },
};

export default function Alert({
  variant,
  isShow,
  buttonChild,
  linkHref,
  buttonProps,
  className,
}: TAlertProps) {
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(true);

  if (!isAlertDisplayed || !isShow) return null;

  const { title, line, text1, text2, icon, iconClassName } =
    variantSettings[variant];

  const renderButton = () => {
    if (!buttonChild) return null;

    if (linkHref) {
      return (
        <Link href={linkHref}>
          <Button
            className="font-Pretendard h-[58px] w-full py-[12px] font-medium"
            {...buttonProps}
          >
            {buttonChild}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          className="font-Pretendard h-[58px] w-full py-[12px] font-medium"
          {...buttonProps}
        >
          {buttonChild}
        </Button>
      );
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
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className={iconClassName || ""}
          />
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
          onClick={() => setIsAlertDisplayed(false)}
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
