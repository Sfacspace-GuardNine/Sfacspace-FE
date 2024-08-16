import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

type TSmallOnlyCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  daysAgo: number;
};

function SmallOnlyCard({
  variant = "elevated",
  title,
  description,
  daysAgo,
}: TSmallOnlyCardProps) {
  const boxClass = cn(
    "w-[414px] rounded-[8px] border border-[#C3C3C3] p-7",
    variant === "elevated"
      ? "bg-background-purpleLight shadow-lg"
      : variant === "filled"
        ? "bg-background-purpleDark"
        : "bg-neutral-white",
  );

  return (
    <div className={boxClass}>
      <div>
        <SuggestionChip
          text="Hot"
          variant="hot"
          className="h-[35px] w-[59px]"
        />
        <p className="word-wrap line-clamp-2 h-[72px] break-all text-[24px] leading-9 tracking-tight">
          {title}
        </p>
        <p className="text-5 mt-6 leading-6 text-[#797979]">{description}</p>
        <div className="mt-6 flex justify-between">
          <div className="flex gap-4">
            <Image src="/icons/pin-icon.png" alt="pin" width={20} height={20} />
            <Image
              src="/icons/share-icon.png"
              alt="share"
              width={20}
              height={20}
            />
          </div>
          <div className="text-[#A2A2A2]">{daysAgo}일 전</div>
        </div>
      </div>
    </div>
  );
}

export default SmallOnlyCard;
