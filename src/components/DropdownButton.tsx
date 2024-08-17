import { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownButton = ({ children, onClick, ...rest }: TButtonProps) => {
  const baseStyle =
    "w-[100px] h-[44px] rounded-[8px] bg-transparent border-[1px] border-[#C3C3C3] flex items-center justify-center text-[20px] text-[#3F3F3F] gap-[4px]";

  const classNames = cn(baseStyle);

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {children}
      <Image
        src={"./images/arrow_down.svg"}
        alt="arrow down"
        width={24}
        height={24}
      ></Image>
    </button>
  );
};

export default DropdownButton;
