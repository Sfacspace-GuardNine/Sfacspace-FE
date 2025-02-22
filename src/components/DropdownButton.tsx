import { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TDropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownButton = ({
  children,
  onClick,
  className,
  ...rest
}: TDropdownButtonProps) => {
  const baseStyle =
    "w-fit h-[44px] rounded-[8px] border-[1px] border-[#C3C3C3] flex items-center text-[20px] text-[#3F3F3F] gap-[4px] p-[10px]";

  const classNames = cn(baseStyle, className);

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {children}
      <Image
        src={"/images/arrow_down.svg"}
        alt="arrow down"
        width={24}
        height={24}
      />
    </button>
  );
};

export default DropdownButton;
