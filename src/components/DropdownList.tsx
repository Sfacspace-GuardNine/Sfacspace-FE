import { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

import DropdownItem from "./DropdownItem";

type TDropdownListProps = HTMLAttributes<HTMLDivElement> & {
  list?: string[];
};

const DropdownList = ({ list, ...rest }: TDropdownListProps) => {
  const baseStyle =
    "flex-col items-center justify-center rounded-[8px] max-w-[200px] overflow-hidden";
  const hoverStyle = "hover:bg-[#FAF8FF]";
  const classNames = cn(baseStyle, hoverStyle);

  return (
    <div
      className={classNames}
      {...rest}
      style={{ boxShadow: "0 2px 16px rgba(0, 0, 0, 0.25)" }}
    >
      {list &&
        list.map((item) => <DropdownItem key={item}>{item}</DropdownItem>)}
    </div>
  );
};

export default DropdownList;
