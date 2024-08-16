import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

type TSmallImageCardProps = {
  status?: "hover" | "pressed";
  title: string;
  description: string;
  daysAgo: number;
};

function SmallImageCard({
  status = "hover",
  title,
  description,
  daysAgo,
}: TSmallImageCardProps) {
  const boxClass = cn(
    "relative w-[414px] overflow-hidden rounded-[8px] border p-7",
    status === "hover" ? "border-[#C3C3C3]" : "border-primary-500",
  );

  return (
    <div className={boxClass}>
      <Image
        src="/images/card-image.png"
        alt="card image"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="z-5 absolute inset-0 rounded-[8px] bg-white opacity-85"></div>
      <div className="relative z-10">
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

export default SmallImageCard;
