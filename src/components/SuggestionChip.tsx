import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TSuggestionChipProps = {
  text: string;
  variant: "new" | "hot" | "gray" | "purple" | "pink";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  new: "bg-system-assist text-white",
  hot: "bg-system-warning text-white",
  gray: "bg-transparent text-[#ADADAD]",
  purple: "bg-primary-50 text-primary-500",
  pink: "bg-background-redLight text-system-warning",
};
export default function SuggestionChip({
  text = "label",
  variant = "new",
  className,
  ...props
}: TSuggestionChipProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full px-[12px] py-[8px] text-base font-semibold disabled:bg-[#E8E8E8] disabled:text-[#ADADAD]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}