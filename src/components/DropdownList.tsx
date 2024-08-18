import React from "react";

import { cn } from "@/utils/cn";

type TDropdownListProps = React.ComponentProps<"ul">;

const DropdownList = ({ children, className, ...rest }: TDropdownListProps) => {
  return (
    <>
      <ul
        className={cn(
          "w-max rounded-lg shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]",
          className,
        )}
        {...rest}
      >
        {children}
      </ul>
      <div className={"rounded-lg"} />
    </>
  );
};

export default DropdownList;
