import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TButtonProps = {
  size?: "lg" | "md" | "sm";
  variant?: "fill" | "outline" | "tonal";
  shape?: "square" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  fill: cn(
    "bg-primary-500 text-white",
    "enabled:hover:drop-shadow-lg disabled:bg-transparent disabled:text-[#969696]",
  ),
  outline: cn(
    "border border-primary-200 text-primary-500",
    "enabled:hover:bg-primary-200 enabled:hover:bg-opacity-[.08] enabled:hover:drop-shadow-lg",
    "disabled:border-[#C3C3C3] disabled:bg-transparent disabled:text-[#969696]",
    "focus:border-primary-500 focus:bg-opacity-[.12]",
    "active:bg-primary-200",
  ),
  tonal: cn(
    "bg-primary-50 text-primary-500",
    "enabled:hover:drop-shadow-lg disabled:bg-transparent disabled:text-primary-100",
  ),
};

const sizeClasses = {
  square: {
    lg: "y-[61px] py-[16px] px-[60px] text-2xl font-semibold",
    md: "y-[56px] py-[16px] px-[20px] text-2xl",
    sm: "y-[20px] py-[8px] px-[20px] text-xl",
  },
  round: {
    lg: "y-[56px] py-[16px] px-[24px] text-2xl",
    md: "y-[56px] py-[16px] px-[24px] text-2xl",
    sm: "y-[40px] py-[8px] px-[20px] text-xl",
  },
};

const shapeClasses = {
  square: "rounded-lg",
  round: "rounded-full",
};

export default function Button({
  size = "md",
  shape = "square",
  variant = "fill",
  className,
  children,
  ...props
}: TButtonProps) {
  return (
    <button
      className={cn(
        variantClasses[variant],
        shapeClasses[shape],
        sizeClasses[shape][size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
