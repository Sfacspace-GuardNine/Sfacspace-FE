import Image from "next/image";

import { cn } from "@/utils/cn";

import { TFileItemProps } from "./List";

const statusStyles = {
  analyzing: { text: "분석중", icon: "loader" },
  pending: { text: "대기중..", icon: null },
  completed: { text: "완료", icon: "checkCircle" },
  error: { text: "오류", icon: "alert-triangle" },
};

export default function ListItem({
  type,
  name,
  status,
  isChecked = false,
}: TFileItemProps) {
  const statusStyle = status && statusStyles[status];

  return (
    <div
      className={cn(
        "item-center flex justify-between p-[10px] text-base hover:bg-background-purpleLight",
        isChecked ? "bg-background-purpleDark" : "bg-white",
      )}
    >
      <div className="flex gap-[4px]">
        {isChecked && (
          <Image
            src={`./images/check.svg`}
            alt={"fileIcon"}
            width={24}
            height={24}
          />
        )}
        <Image
          src={`./images/${type === "file" ? "file_empty" : "folder-open"}.svg`}
          alt={"fileIcon"}
          width={24}
          height={24}
        />
        <span>{name}</span>
      </div>
      {statusStyle && (
        <div className="flex">
          {statusStyle.icon && (
            <Image
              src={`./images/${statusStyle.icon}.svg`}
              alt={"error"}
              width={18}
              height={18}
            />
          )}
          <span className={cn(status === "pending" && "text-[#969696]")}>
            {statusStyle.text}
          </span>
        </div>
      )}
    </div>
  );
}
