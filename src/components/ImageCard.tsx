import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

type TImageCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  daysAgo: number;
};

function ImageCard({
  variant = "elevated",
  title,
  description,
  daysAgo,
}: TImageCardProps) {
  const boxClass = cn(
    "flex w-full max-w-[865px] rounded-[8px] border border-[#C3C3C3] p-7",
    variant === "elevated"
      ? "bg-background-purpleLight shadow-lg"
      : variant === "filled"
        ? "bg-background-purpleDark"
        : "bg-neutral-white",
  );

  return (
    <div className={boxClass}>
      <div className="flex-shrink-0">
        <Image
          src="/images/card-image.png"
          alt="cardImage"
          width={320}
          height={262}
          className="object-cover"
        />
      </div>
      <div className="flex h-full w-full max-w-[459px] flex-col pl-6">
        <SuggestionChip
          text="Hot"
          variant="hot"
          className="h-[35px] w-[59px]"
        />
        <p className="word-wrap mt-2 line-clamp-2 max-h-12 max-w-[416px] break-all text-xl leading-6">
          {title}
        </p>
        <div className="w-[71px] leading-[19px] text-[#ADADAD]">Microsoft</div>
        <div className="word-wrap mt-6 w-full min-w-14 max-w-[459px] break-all rounded-2xl bg-neutral-white p-5 text-[#797979]">
          {description}
        </div>
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

export default ImageCard;
