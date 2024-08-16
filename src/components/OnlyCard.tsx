import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TOnlyCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  daysAgo: number;
};

function OnlyCard({
  variant = "elevated",
  title,
  description,
  daysAgo,
}: TOnlyCardProps) {
  const boxClass = cn(
    "w-full rounded-[8px] border border-[#C3C3C3] p-7",
    variant === "elevated"
      ? "bg-background-purpleLight shadow-lg"
      : variant === "filled"
        ? "bg-background-purpleDark"
        : "bg-neutral-white",
  );
  const descriptionClass = cn(
    "mt-6 w-full min-w-14 rounded-2xl p-5 text-[#797979]",
    variant === "elevated"
      ? "bg-neutral-white"
      : variant === "filled"
        ? "bg-background-grayLight"
        : "bg-background-grayLight",
  );

  return (
    <div className={boxClass}>
      <div className="flex">
        <p className="h-[35px] w-[59px]">HOT</p>
        <p className="pl-2 pt-[11px] text-[20px] leading-6">{title}</p>
      </div>
      <div className="w-[71px] leading-[19px] text-[#ADADAD]">Microsoft</div>
      <div className={descriptionClass}>{description}</div>
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
  );
}

export default OnlyCard;
