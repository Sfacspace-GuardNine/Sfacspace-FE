import React, { ButtonHTMLAttributes, ReactNode } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TFloatingProps = {
  variant?: "ask" | "top";
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Floating({
  variant = "ask",
  className,
  children,
  ...props
}: TFloatingProps) {
  const buttonClass = cn(
    "h-[76px] w-[76px] transition-all duration-300 ease-in-out",
    variant === "ask"
      ? "bg-[url('/images/floating-ask-enabled.svg')] hover:bg-[url('/images/floating-ask-hovered.svg')]"
      : "flex flex-col items-center justify-center rounded-full",
  );

  const renderTopButton = () => (
    <>
      <button
        className={cn(
          buttonClass,
          className,
          "border-[2px] border-primary-500 p-[10px]",
        )}
        {...props}
      >
        <Image
          src="/images/floating-arrow.svg"
          alt="플로팅애로우"
          width={21}
          height={25}
          className="mb-[11.5px]"
        />
        <div className="text-xs font-medium text-primary-500">{children}</div>
      </button>
      <button className="absolute left-0 top-0 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-primary-500 p-[10px] opacity-0 transition-opacity duration-300 hover:opacity-100">
        <Image
          src="/images/hover-floating-arrow.svg"
          alt="호버플로팅애로우"
          width={21}
          height={25}
          className="mb-[11.5px]"
        />
        <div className="text-xs font-medium text-white">{children}</div>
      </button>
    </>
  );

  return (
    <div className="relative">
      {variant === "top" ? (
        renderTopButton()
      ) : (
        <button className={cn(buttonClass, className)} {...props}>
          {children}
        </button>
      )}
    </div>
  );
}

export default Floating;
