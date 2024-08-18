import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PageButton = ({ children, className, ...rest }: TButtonProps) => {
  const baseStyle =
    "mr-[13px] w-[36px] h-[36px] flex justify-center items-center transparent text-[#3F3F3F] text-[16px] font-normal rounded-[4px]";
  const hoverStyle = "hover:bg-[#FAF8FF] duration-300";
  const classNames = cn(baseStyle, hoverStyle, className);

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default PageButton;
