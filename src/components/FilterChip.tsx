import { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TFilterChipProps = {
  text?: string;
  hasIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function FilterChip({
  text = "Label",
  hasIcon = false,
  className,
  disabled,
  ...props
}: TFilterChipProps) {
  return (
    <button
      className={cn(
        "enable:hover:shadow-lg flex h-[44px] items-center justify-center rounded-lg border border-[#C3C3C3] bg-[#7E5AFF] bg-opacity-[0.08] px-[8px] text-xl",
        disabled && "bg-background-purpleLight text-[#C3C3C3]",
        className,
      )}
      {...props}
    >
      {text}
      {hasIcon && (
        <Image
          src={
            disabled
              ? "./images/caret-down-disabled.svg"
              : "./images/caret-down.svg"
          }
          alt={"caretDown icon"}
          width={24}
          height={24}
          className="m-[2px]"
        />
      )}
    </button>
  );
}
