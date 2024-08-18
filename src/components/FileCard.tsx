"use client";

import React, { ButtonHTMLAttributes, useState } from "react";

import Image from "next/image";

import AssistChip from "@/components/AssistChip";
import DropdownItem from "@/components/DropdownItem";
import DropdownList from "@/components/DropdownList";
import { cn } from "@/utils/cn";

type TFileCardProps = {
  variant?: "detected" | "default";
  title: string;
  caption: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function FileCard({ variant = "default", title, caption }: TFileCardProps) {
  const [isDropDown, setIsDropDown] = useState(false);
  const onClickDropDown = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <div
      className={
        "h-[200px] w-[310px] rounded-[12px] border border-primary-100 bg-neutral-white p-5 hover:bg-primary-50"
      }
    >
      <div className="flex justify-between">
        <AssistChip
          text="Label"
          variant="outline"
          className={cn({
            "border-primary-500 bg-white text-primary-500":
              variant === "detected",
            "border-[#3F3F3F] text-[#3F3F3F]": variant !== "detected",
          })}
        />
        <div className="relative inline-block">
          <button onClick={onClickDropDown} className={"h-[17px] w-[3px]"}>
            <Image
              src="/icons/threedot-icon.svg"
              alt="dotIcon"
              width={3}
              height={17}
            />
          </button>
          {isDropDown && (
            <DropdownList className={"absolute right-[-6px]"}>
              <DropdownItem className={"px-5 py-3 text-xl"}>삭제</DropdownItem>
              <DropdownItem className={"px-5 py-3 text-xl"}>공유</DropdownItem>
            </DropdownList>
          )}
        </div>
      </div>
      <div className="mt-[59px]">
        <p className="text-[28px] leading-8">{title}</p>
        <p className="mt-[10px] leading-4 text-[#969696]">{caption}</p>
      </div>
    </div>
  );
}

export default FileCard;
