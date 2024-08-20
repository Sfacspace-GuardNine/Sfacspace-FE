"use client";

import React from "react";

import dayjs from "dayjs";

import SuggestionChip from "@/components/SuggestionChip";
import { cn } from "@/utils/cn";

type TClippingCardProps = {
  variant?: "new" | "hot" | "purple" | "pink";
  disabled?: boolean;
  label: string;
  date: Date;
} & React.ComponentProps<"div">;

export default function ClippingCard({
  variant = "new",
  disabled = false,
  label,
  date,
  children,
  ...rest
}: TClippingCardProps) {
  return (
    <>
      <div
        className={cn(
          "flex cursor-pointer flex-col gap-6 rounded-lg p-7 outline outline-1 outline-[#C3C3C3]",
        )}
        {...rest}
      >
        <div className={"flex flex-col gap-2"}>
          <SuggestionChip
            text={label}
            variant={variant}
            disabled={disabled}
            className={"w-fit"}
          />
          <p
            className={
              "line-clamp-2 text-start text-2xl font-medium leading-relaxed"
            }
          >
            {children}
          </p>
        </div>
        <p className={"text-[14px] text-[#969696]"}>
          {dayjs(date).format("YYYY.MM.DD HH:mm:ss")}
        </p>
      </div>
    </>
  );
}
