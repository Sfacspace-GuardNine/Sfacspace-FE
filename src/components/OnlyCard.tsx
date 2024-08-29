import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import { cn } from "@/utils/cn";

import SuggestionChip from "./SuggestionChip";

dayjs.extend(relativeTime);
dayjs.locale("ko");

type TOnlyCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  type: string;
  title: string;
  description: string;
  publishedAt: Date;
  source: string;
};

function OnlyCard({
  variant = "outlined",
  type,
  title,
  description,
  publishedAt,
  source,
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
    "mt-6 w-full min-w-14 truncate rounded-2xl p-5 text-[#797979]",
    variant === "elevated"
      ? "bg-neutral-white"
      : variant === "filled"
        ? "bg-background-grayLight"
        : "bg-background-grayLight",
  );

  return (
    <div className={boxClass}>
      <div className="flex pb-3">
        {type === "hot" ? (
          <SuggestionChip
            text="Hot"
            variant="hot"
            className="h-[35px] w-[59px]"
          />
        ) : (
          <SuggestionChip text="NEW" variant="new" />
        )}
        <p className="truncate pl-2 pt-[11px] text-[20px] font-semibold leading-6">
          {title}
        </p>
      </div>
      <p className="w-[71px] leading-[19px] text-[#ADADAD]">{source}</p>
      <div className={descriptionClass}>{description}</div>
      <div className="mt-6 flex justify-between">
        <div className="flex gap-4">
          <button>
            <Image src="/icons/pin-icon.svg" alt="pin" width={20} height={20} />
          </button>
          <button>
            <Image
              src="/icons/share-icon.svg"
              alt="share"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="text-[#A2A2A2]">
          {publishedAt && dayjs().from(publishedAt, true)} 전
        </div>
      </div>
    </div>
  );
}

export default OnlyCard;
