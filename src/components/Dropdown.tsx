"use client";

import { HTMLAttributes, useState } from "react";

import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

type TDropdownProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
  list?: string[];
};

const Dropdown = ({ name, className, children, ...rest }: TDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const baseStyle =
    "relative items-center justify-between gap-[8px] inline-block";

  return (
    <div className={baseStyle} {...rest}>
      <DropdownButton onClick={toggleDropdown} className={className}>
        {name}
      </DropdownButton>
      {isOpen && (
        <DropdownList className={"absolute z-30 m-2"}>{children}</DropdownList>
      )}
    </div>
  );
};

export default Dropdown;
