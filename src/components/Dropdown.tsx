"use client";

import { HTMLAttributes, useState } from "react";

import { cn } from "@/utils/cn";

import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

type TDropdownProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
  list?: string[];
};

const Dropdown = ({ name, list, ...rest }: TDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const baseStyle =
    "relative flex flex-col items-center justify-between gap-[8px]";
  const classNames = cn(baseStyle);

  return (
    <div className={classNames} {...rest}>
      <DropdownButton onClick={toggleDropdown}>{name}</DropdownButton>
      {isOpen && <DropdownList list={list}></DropdownList>}
    </div>
  );
};

export default Dropdown;
