import React, { ButtonHTMLAttributes } from "react";

import Link from "next/link";

import AssistChip from "@/components/AssistChip";
import ThreeDotDropDown from "@/components/ThreeDotDropDown";
import { cn } from "@/utils/cn";

type TFileCardProps = {
  variant?: "detected" | "default";
  title: string;
  caption: string;
  link: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function FileCard({
  variant = "default",
  title,
  caption,
  link,
}: TFileCardProps) {
  return (
    <>
      <Link
        className={
          "h-[200px] w-[310px] rounded-[12px] border border-primary-100 bg-neutral-white p-5 hover:bg-primary-50"
        }
        href={link}
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
          <ThreeDotDropDown />
        </div>
        <div className="mt-[59px]">
          <p className="text-[28px] leading-8">{title}</p>
          <p className="mt-[10px] leading-4 text-[#969696]">{caption}</p>
        </div>
      </Link>
    </>
  );
}

export default FileCard;
