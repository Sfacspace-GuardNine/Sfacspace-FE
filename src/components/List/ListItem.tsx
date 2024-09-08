"use client";

import { useState } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import ProgressBar from "../ProgressBar";
import BookmarkButton from "../my/BookmarkButton";
import { TFileItemProps } from "./List";

const statusStyles = {
  analyzing: { text: null, icon: "loader-icon" },
  pending: { text: "대기중..", icon: null },
  completed: { text: null, icon: "check-circle-icon" },
  error: { text: null, icon: "alert-triangle" },
};

export default function ListItem({
  type,
  name,
  status,
  isChecked = false,
}: TFileItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusStyle = status && statusStyles[status];

  return (
    <div
      className={cn(
        "flex flex-col p-[10px] hover:bg-background-purpleLight",
        isChecked ? "bg-primary-50" : "bg-white",
      )}
    >
      <div
        className={cn("item-center flex justify-between text-base")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex">
          {type === "folder" ? (
            <div className="mr-[2px] h-5 w-5">
              <Image
                src={`/images/file-fold-icon.svg`}
                alt={"fileIcon"}
                width={20}
                height={20}
              />
            </div>
          ) : (
            <div className="mr-[4px] h-6 w-6">
              {isChecked && (
                <Image
                  src={`/images/check.svg`}
                  alt={"fileIcon"}
                  width={24}
                  height={24}
                />
              )}
            </div>
          )}
          <Image
            src={`/images/${type === "file" ? "file-icon" : "folder-open"}.svg`}
            alt={"fileIcon"}
            width={`${type === "file" ? 17 : 21}`}
            height={`${type === "file" ? 20 : 16}`}
            className={`${type === "file" ? "mr-[10px]" : "mr-[4px]"}`}
          />
          <span className="tracking-tighter">{name}</span>
        </div>
        <div className="flex items-center">
          {type === "file" ? <BookmarkButton isHovered={isHovered} /> : null}
          {statusStyle && (
            <div className="flex">
              {statusStyle.icon && (
                <Image
                  src={`/images/${statusStyle.icon}.svg`}
                  alt={"error"}
                  width={20}
                  height={20}
                  className="ml-[10px]"
                />
              )}
              <span
                className={cn(
                  status === "pending" &&
                    "ml-[10px] tracking-tighter text-[#969696]",
                )}
              >
                {statusStyle.text}
              </span>
            </div>
          )}
        </div>
      </div>
      {status === "completed" && <ProgressBar value={50} />}
    </div>
  );
}
