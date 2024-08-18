"use client";

import { HTMLAttributes, useState } from "react";

import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

type TDropdownProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
  list?: string[];
};

const Dropdown = ({ name, list, className, ...rest }: TDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const baseStyle =
    "relative flex flex-col items-center justify-between gap-[8px]";

  return (
    <div className={baseStyle} {...rest}>
      <DropdownButton onClick={toggleDropdown} className={className}>
        {name}
      </DropdownButton>
      {isOpen && <DropdownList list={list} />}
    </div>
  );
};

export default Dropdown;
