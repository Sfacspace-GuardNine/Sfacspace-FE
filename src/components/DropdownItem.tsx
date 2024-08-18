"use client";

import { HTMLAttributes, useState } from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TDropdownItemProps = HTMLAttributes<HTMLDivElement>;

const DropdownItem = ({ children, ...rest }: TDropdownItemProps) => {
  const [isChecked, setCheck] = useState(false);
  const toggleCheck = () => {
    setCheck(!isChecked);
  };
  const baseStyle =
    "h-[39px] flex items-center justify-center bg-neutral-white text-[16px] gap-[8px] p-[10px]";
  const hoverStyle = "hover:bg-[#FAF8FF]";
  const checkedStyle = "bg-[#E3E1E7]";
  const classNames = cn(baseStyle, hoverStyle, isChecked ? checkedStyle : "");

  return (
    <div className={classNames} {...rest} onClick={toggleCheck}>
      {isChecked && (
        <Image
          src={"./images/checked.svg"}
          alt="checked"
          width={24}
          height={24}
        ></Image>
      )}
      {children}
    </div>
  );
};

export default DropdownItem;
