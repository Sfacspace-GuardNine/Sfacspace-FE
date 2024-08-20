"use client";

import React, { useState } from "react";

import dayjs from "dayjs";
import Image from "next/image";

import { cn } from "@/utils/cn";

type TCardHoveredProps = {
  title: string;
  createdAt: Date;
  index: number;
  isHovered?: boolean;
  setHoveredIndex: (index: number) => void;
};

function CardHovered({
  title,
  createdAt,
  index,
  isHovered,
  setHoveredIndex,
}: TCardHoveredProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(0)}
        onClick={() => setIsClicked(!isClicked)}
        className={cn(
          "relative h-[390px] w-[316px] overflow-hidden transition-all duration-300",
          isHovered || isClicked
            ? "h-[390px] w-[625px]"
            : "h-[390px] w-[316px]",
        )}
      >
        <Image
          src={
            isHovered || isClicked
              ? "/images/card-hover.png"
              : "/images/card-enabled.png"
          }
          alt="card image"
          fill
          className={cn("object-cover transition-opacity duration-200")}
        />
        <div className="absolute bottom-0 flex w-full transform items-end justify-between p-9">
          <div
            className={cn("max-w-32", isHovered ? "max-w-[420px]" : "max-w-32")}
          >
            <p
              className={cn(
                "font-semibold text-neutral-white transition-all duration-200",
                isHovered || isClicked ? "text-[28px]" : "text-[18px]",
              )}
            >
              {title}
            </p>
            <p
              className={cn(
                "font-medium text-[#969696] transition-all duration-200",
                isHovered || isClicked ? "text-[20px]" : "text-[12px]",
              )}
            >
              {dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
            </p>
          </div>
          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-neutral-white opacity-70">
            <Image
              src="/icons/card-arrow.svg"
              alt="card arrow"
              width={28}
              height={26}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHovered;
