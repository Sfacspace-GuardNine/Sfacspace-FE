import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TAssistChipProps = {
  text?: string;
  variant?: "default" | "fill" | "outline";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  default: cn(
    "border border-black bg-black bg-opacity-[0.08]",
    "disabled-[#C3C3C3] border-[#969696] disabled:bg-white disabled:text-[#969696]",
  ),
  fill: cn(
    "bg-[#7E5AFF] bg-opacity-[0.08]",
    "disabled:bg-background-purpleLight disabled:text-background-purpleDark",
  ),
  outline: cn(
    "border border-primary-300 bg-[#7E5AFF] bg-opacity-[0.08] text-primary-500",
    "disabled:bg-background-purpleLight disabled:text-background-purpleDark",
  ),
};
export default function AssistChip({
  text = "label",
  variant = "default",
  className,
  ...props
}: TAssistChipProps) {
  return (
    <button
      className={cn(
        "enable:hover:shadow-lg flex h-[30px] w-[60px] items-center justify-center rounded-full px-[12px] py-[8px] text-base",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
