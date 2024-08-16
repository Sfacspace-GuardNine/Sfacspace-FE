import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TFloatingProps = {
  variant?: "ask" | "top";
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Floating({ variant = "ask", className, ...props }: TFloatingProps) {
  const buttonClass = cn(
    "h-[76px] w-[76px] bg-cover",
    variant === "ask"
      ? "bg-[url('/images/floating-ask-enabled.svg')] hover:bg-[url('/images/floating-ask-hovered.svg')]"
      : "bg-[url('/images/floating-top-enabled.svg')] hover:bg-[url('/images/floating-top-hovered.svg')]",
  );

  return <button className={cn(buttonClass, className)} {...props} />;
}

export default Floating;
