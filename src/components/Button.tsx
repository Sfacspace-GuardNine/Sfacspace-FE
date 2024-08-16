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
    "enabled:hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] disabled:bg-transparent disabled:text-[#969696]",
  ),
  outline: cn(
    "border border-primary-200 text-primary-500",
    "enabled:hover:bg-[#6100FF] enabled:hover:bg-opacity-[.08] enabled:hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)]",
    "disabled:border-[#C3C3C3] disabled:bg-transparent disabled:text-[#969696]",
    "focus:border-primary-500 focus:bg-[#6100FF] focus:bg-opacity-[.12]",
    "active:bg-[#6100FF] active:bg-opacity-[.12]",
  ),
  tonal: cn(
    "bg-primary-50 text-primary-500",
    "enabled:hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] disabled:bg-transparent disabled:text-primary-100",
  ),
};

const sizeClasses = {
  square: {
    lg: "py-[16px] px-[60px] text-2xl font-semibold",
    md: "py-[16px] px-[20px] text-2xl font-light",
    sm: "py-[8px] px-[20px] text-xl font-light",
  },
  round: {
    lg: "py-[16px] px-[24px] text-2xl font-light",
    md: "py-[16px] px-[24px] text-2xl font-light",
    sm: "py-[8px] px-[20px] text-xl font-light",
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
