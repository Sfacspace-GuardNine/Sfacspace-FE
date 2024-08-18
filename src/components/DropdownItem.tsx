"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

type TDropdownItemProps = React.ComponentProps<"li"> & {
  checked?: boolean;
};

const DropdownItem = ({
  children,
  checked = false,
  className,
  ...rest
}: TDropdownItemProps) => {
  return (
    <>
      <li
        className={cn(
          "flex min-w-[80px] cursor-pointer items-center justify-center gap-2 bg-white p-[10px] text-[16px] first:rounded-t-lg last:rounded-b-lg hover:bg-background-purpleDark",
          { checkedStyle: checked },
          className,
        )}
        {...rest}
      >
        {checked && (
          <Image
            src={"/images/checked.svg"}
            alt="checked"
            width={24}
            height={24}
          ></Image>
        )}
        {children}
      </li>
    </>
  );
};

export default DropdownItem;
