import React, { HTMLAttributes, useState } from "react";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import AssistChip from "@/components/AssistChip";
import { cn } from "@/utils/cn";

import BookmarkButton from "./my/BookmarkButton";

type TFileCardProps = {
  variant?: "detected" | "detecting" | "default";
  title: string;
  link: string;
  repoId: string;
  createdAt: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function FileCard({
  variant = "default",
  title,
  link,
  repoId,
  createdAt,
  children,
  ...rest
}: TFileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const dateStr = createdAt;
  const formattedDate = dayjs(dateStr).format("YY.MM.DD");

  return (
    <>
      <div
        className={
          "flex h-[200px] flex-col justify-between rounded-xl border border-primary-100 p-5 hover:bg-background-purpleLight"
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            {variant !== "default" && (
              <AssistChip
                text={
                  variant === "detected"
                    ? "검사완료"
                    : variant === "detecting"
                      ? "검사중"
                      : ""
                }
                variant={
                  variant === "detected" || variant === "detecting"
                    ? "fill"
                    : "default"
                }
                className={
                  variant === "detected"
                    ? "h-[38px] w-[79px] bg-primary-50 bg-opacity-100 font-pretendard font-medium text-primary-500"
                    : variant === "detecting"
                      ? "h-[38px] w-[66px] bg-background-grayLight bg-opacity-100 font-pretendard font-medium text-[#969696]"
                      : ""
                }
              />
            )}
            <p className="line-clamp-1 max-w-[205px] text-[28px]">{title}</p>
          </div>

          <div className="h-12 w-12 items-center rounded-[12px] bg-white p-[10px]">
            <BookmarkButton
              isHovered={isHovered}
              width={28}
              height={27}
              variant="light"
              repoId={repoId}
            />
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <Link href={link}>
            <button
              className={cn(
                "flex h-12 w-[146px] items-center justify-between rounded-[14px] bg-[#6100FF] p-[10px] text-white",
                variant === "detected" && "bg-neutral-100",
              )}
            >
              <Image
                src="/images/detector-logo.svg"
                alt="디텍터 로고"
                width={24}
                height={24}
              />
              {children}
              <Image
                src="/images/filecard-caretright.svg"
                alt="캐럿라이트"
                width={24}
                height={24}
              />
            </button>
          </Link>
          <div>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileCard;
