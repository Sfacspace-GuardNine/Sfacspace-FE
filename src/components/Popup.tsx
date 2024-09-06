import React, { PropsWithChildren, useEffect } from "react";
import { HTMLAttributes } from "react";

import { createPortal } from "react-dom";

import { cn } from "@/utils/cn";

import Button from "./Button";

interface TPopupProps {
  isShow: boolean;
  onClose?: () => void;
  backgroundClassName?: string;
  contentClassName?: string;

  variant?: "large" | "small";
  hasButtons?: boolean;
  hasBackground?: boolean;
  buttonText?: [string, string?];
}

function Title({
  text,
  className,
  textSize = "sm",
}: { textSize?: "sm" | "lg"; text: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex justify-center py-[10px] font-semibold",
        textSize === "sm" ? "text-xl" : "text-2xl",
        className,
      )}
    >
      <span>{text}</span>
    </div>
  );
} //제목

function Content({
  text,
  helpText,
  className,
}: { text: string; helpText?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-[#969696]", className)}>
      <div className="flex justify-center p-[10px] text-base">{text}</div>
      {helpText && (
        <div className="flex justify-center p-[10px] text-xs">{helpText}</div>
      )}
    </div>
  );
} //내용

function Container({
  isShow,
  onClose,
  backgroundClassName,
  contentClassName,
  children,
  variant = "small",
  hasButtons = true,
  hasBackground = false,
  buttonText = ["button", "button"],
}: PropsWithChildren<TPopupProps>) {
  const variantClasses = {
    large: "p-[48px] gap-[32px]",
    small: "p-[32px] gap-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.25)] ",
  };

  useEffect(() => {
    if (isShow) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isShow]);

  if (!isShow) {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        "z-100 fixed inset-0 flex h-full w-full items-center justify-center",
        hasBackground && "bg-black bg-opacity-[.6]",
        backgroundClassName,
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "flex min-w-[380px] flex-col items-center justify-center rounded-[20px] bg-white",
          variantClasses[variant],
          contentClassName,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {hasButtons && (
          <div className="flex gap-[12px]">
            {variant === "small" && (
              <Button shape="round" variant="fill" size="sm">
                {buttonText[0]}
              </Button>
            )}
            {variant === "large" && (
              <>
                <Button shape="square" variant="outline" size="sm">
                  {buttonText[0]}
                </Button>
                <Button shape="square" variant="fill" size="sm">
                  {buttonText[1]}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

const Popup = {
  Container,
  Title,
  Content,
};

export default Popup;
