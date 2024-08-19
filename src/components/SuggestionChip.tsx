import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TSuggestionChipProps = {
  text: string;
  variant: "new" | "hot" | "purple" | "pink";
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  new: "bg-system-assist text-white",
  hot: "bg-system-warning text-white",
  gray: "bg-transparent text-[#ADADAD]",
  purple: "bg-primary-50 text-primary-500",
  pink: "bg-background-redLight text-system-warning",
};

const disabledClasses = {
  new: "bg-[#E8E8E8] text-[#ADADAD]",
  hot: "bg-[#E8E8E8] text-[#ADADAD]",
  purple: "bg-transparent text-[#ADADAD]",
  pink: "bg-transparent text-[#ADADAD]",
};

export default function SuggestionChip({
  text = "label",
  variant = "new",
  isDisabled = false,
  className,
  ...props
}: TSuggestionChipProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full px-[12px] py-[8px] text-base font-semibold",
        !isDisabled ? variantClasses[variant] : disabledClasses[variant],
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
