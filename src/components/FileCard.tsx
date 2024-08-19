import React, { ComponentProps } from "react";

import Link from "next/link";

import AssistChip from "@/components/AssistChip";
import ThreeDotDropDown from "@/components/ThreeDotDropDown";

type TFileCardProps = {
  variant?: "detected" | "default";
  title: string;
  caption: string;
  link: string;
} & Omit<ComponentProps<typeof Link>, "href">;

function FileCard({
  variant = "default",
  title,
  caption,
  link,
  ...rest
}: TFileCardProps) {
  return (
    <>
      <Link
        className={
          "flex h-[200px] flex-col justify-between rounded-xl border border-primary-100 p-5 hover:bg-primary-50"
        }
        href={link}
        {...rest}
      >
        <div className="flex justify-between">
          <AssistChip
            text="Label"
            variant={variant === "detected" ? "outline" : "default"}
          />
          <ThreeDotDropDown />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="line-clamp-1 text-[28px]">{title}</p>
          <p className="line-clamp-1 text-[#969696]">{caption}</p>
        </div>
      </Link>
    </>
  );
}

export default FileCard;
