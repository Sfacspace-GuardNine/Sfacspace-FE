import { InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "filled" | "error" | "default";
};

const Input = ({
  variant = "default",
  disabled,
  className,
  ...rest
}: TInputProps) => {
  const defaultStyle =
    "outline-none p-[12px] rounded-[8px] w-[866px] h-[51px] border-[1px] border-neutral-10 bg-transparent bg-transparent text-[#3F3F3F] text-[18px] font-medium focus:border-primary-500 focus:bg-transparent";
  const filledStyle = "bg-[#FAF8FF]";
  const errorStyle = "border-system-warning bg-[#FFEFEF]";
  const disabledStyle = "bg-[#F1F1F1] text-[#D6D6D6] border-[#D6D6D6]";

  const classNames = cn(
    defaultStyle,
    variant === "filled" ? filledStyle : "",
    variant === "error" ? errorStyle : "",
    disabled ? disabledStyle : "",
    className,
  );

  return <input className={classNames} disabled={disabled} {...rest}></input>;
};

export default Input;
