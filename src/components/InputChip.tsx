import { HTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TInputChipProps = {
  text: string;
  hasIcon?: boolean;
  percentage?: number;
  hasClose?: boolean;
  variant?: "dark" | "light";
  progress?: "0" | "1" | "2" | "3";
} & HTMLAttributes<HTMLDivElement>;

const variantClasses = {
  dark: "bg-[#230C4E]",
  light: "bg-[#7E5AFF]",
};

const progressClasses = {
  "0": "bg-opacity-[0]",
  "1": "bg-opacity-[.08]",
  "2": "bg-opacity-[.12]",
  "3": "bg-opacity-[.16]",
};

export default function InputChip({
  text,
  hasIcon = true,
  percentage,
  hasClose = true,
  className,
  variant = "dark",
  progress = "3",
  ...props
}: TInputChipProps) {
  return (
    <div
      className={cn(
        "flex w-[221px] justify-between rounded-lg bg-[#230C4E] bg-opacity-[.44] px-[12px] py-[8px] text-[#3F3F3F] hover:shadow-lg",
        variantClasses[variant],
        progressClasses[progress],
        className,
      )}
      {...props}
    >
      {hasIcon && (
        <Image
          src={"./images/document_icon.svg"}
          alt={"file icon"}
          width={24}
          height={24}
        />
      )}
      <span>{text}</span>
      {percentage && <span>{percentage}%</span>}
      {hasClose && (
        <Image
          src={"./images/X.svg"}
          alt={"close icon"}
          width={11.5}
          height={11.5}
          className="m-[2px]"
        />
      )}
    </div>
  );
}
