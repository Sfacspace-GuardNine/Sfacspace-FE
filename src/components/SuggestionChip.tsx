import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TSuggestionChipProps = {
  text: string;
  variant?: "default" | "new" | "hot" | "clipping0" | "clipping1" | "clipping2";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  default: "bg-[#E8E8E8] text-[#ADADAD]",
  new: "bg-system-assist text-white",
  hot: "bg-system-warning text-white",
  clipping0: "bg-transparent text-[#ADADAD]",
  clipping1: "bg-primary-50 text-primary-500",
  clipping2: "bg-background-redLight text-system-warning",
};
export default function SuggestionChip({
  text = "label",
  variant = "default",
  className,
  ...props
}: TSuggestionChipProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full px-[12px] py-[8px] text-base font-semibold",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
