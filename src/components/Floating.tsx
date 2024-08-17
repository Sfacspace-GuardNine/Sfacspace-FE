import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type TFloatingProps = {
  variant?: "ask" | "top";
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Floating({ variant, className, children, ...props }: TFloatingProps) {
  const buttonClass = cn(
    "h-[76px] w-[76px] bg-cover",
    variant === "ask"
      ? "bg-[url('/images/floating-ask-enabled.svg')] hover:bg-[url('/images/floating-ask-hovered.svg')]"
      : variant === "top"
        ? "bg-[url('/images/floating-top-enabled.svg')] hover:bg-[url('/images/floating-top-hovered.svg')]"
        : "",
  );

  return (
    <button className={cn(buttonClass, className)} {...props}>
      {children}
    </button>
  );
}

export default Floating;
