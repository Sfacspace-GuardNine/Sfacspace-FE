import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "primary",
  disabled,
  ...rest
}: TButtonProps) => {
  const baseStyle = "py-2 px-4 font-semibold rounded";
  const primaryStyle = "bg-black text-white";
  const secondaryStyle = "bg-gray-300 text-black";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  const classNames = cn(
    baseStyle,
    variant === "primary" ? primaryStyle : secondaryStyle,
    disabled ? disabledStyle : "",
  );

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
