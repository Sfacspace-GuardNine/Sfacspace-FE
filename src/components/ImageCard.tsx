import React, { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

type TImageCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  author: string;
  daysAgo: number;
  className?: string;
  pinButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  shareButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function ImageCard({
  variant = "elevated",
  title,
  description,
  author,
  daysAgo,
  className,
  pinButtonProps,
  shareButtonProps,
  ...props
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
    <div className={cn(boxClass, className)} {...props}>
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
        <div className="mt-2 leading-[19px] text-[#ADADAD]">{author}</div>
        <div className="word-wrap mt-6 w-full min-w-14 max-w-[459px] break-all rounded-2xl bg-neutral-white p-5 text-[#797979]">
          {description}
        </div>
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

export default ImageCard;
