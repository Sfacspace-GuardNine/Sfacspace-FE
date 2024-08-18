import React, { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

type TSmallCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  daysAgo: number;
  pinButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  shareButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function SmallCard({
  variant = "elevated",
  title,
  description,
  daysAgo,
  pinButtonProps,
  shareButtonProps,
}: TSmallCardProps) {
  const boxClass = cn(
    "group relative min-h-[275px] w-[414px] rounded-[8px] border border-[#C3C3C3] p-7 transition-all duration-200 ease-in-out hover:bg-[url('/images/card-image.png')] hover:bg-cover",
    variant === "elevated"
      ? "bg-background-purpleLight shadow-lg"
      : variant === "filled"
        ? "bg-background-purpleDark"
        : "bg-neutral-white",
    "focus:bg-[url('/images/card-image.png')] focus:bg-cover",
  );

  return (
    <div className={boxClass}>
      <div className="absolute inset-0 z-10 h-full w-full rounded-[7px] bg-white opacity-0 transition-all duration-0 group-hover:opacity-85 group-focus:border group-focus:border-[#9747FF] group-focus:opacity-85"></div>
      <div className="relative z-20">
        <SuggestionChip
          text="Hot"
          variant="hot"
          className="h-[35px] w-[59px]"
        />
        <p className="word-wrap mt-2 line-clamp-2 h-[72px] break-all text-[24px] leading-9 tracking-tight">
          {title}
        </p>
        <p className="text-5 mt-6 leading-6 text-[#797979]">{description}</p>
        <div className="mt-6 flex justify-between">
          <div className="flex gap-4">
            <button {...pinButtonProps}>
              <Image
                src="/icons/pin-icon.svg"
                alt="pin"
                width={20}
                height={20}
              />
            </button>
            <button {...shareButtonProps}>
              <Image
                src="/icons/share-icon.svg"
                alt="share"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="text-[#A2A2A2]">{daysAgo}일 전</div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
