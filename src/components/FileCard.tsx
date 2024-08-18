import React, { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import AssistChip from "@/components/AssistChip";
import { cn } from "@/utils/cn";

type TFileCardProps = {
  variant?: "detected" | "default";
  title: string;
  caption: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function FileCard({
  variant = "default",
  title,
  caption,
  buttonProps,
}: TFileCardProps) {
  const boxClass = cn(
    "h-[200px] w-[310px] rounded-[12px] border border-primary-100 bg-neutral-white p-5 hover:bg-primary-50",
  );

  const chipClass =
    variant === "detected"
      ? "border-primary-500 text-primary-500 bg-white"
      : "border-[#3F3F3F] text-[#3F3F3F]";

  return (
    <div className={boxClass}>
      <div className="flex justify-between">
        <AssistChip text="Label" variant="outline" className={chipClass} />
        <div className="relative h-[17px] w-[3px]">
          <button {...buttonProps}>
            <Image
              src="/icons/threedot-icon.svg"
              alt="dotIcon"
              layout="fill"
              objectFit="contain"
            />
          </button>
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
