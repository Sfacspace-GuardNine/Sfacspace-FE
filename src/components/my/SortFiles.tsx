import React from "react";

import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/DropdownItem";
import DropdownList from "@/components/DropdownList";

export default function SortFiles() {
  return (
    <>
      <div className={"flex justify-between"}>
        <p className={"pb-12 text-[32px] font-medium text-[#3F3F3F]"}>
          Library
        </p>
        {/* 드랍다운 영역 */}
        <div className={"flex gap-1"}>
          <Dropdown name={"Type"}>
            <DropdownList>
              <DropdownItem>type1</DropdownItem>
              <DropdownItem>type2</DropdownItem>
            </DropdownList>
          </Dropdown>
          <Dropdown name={"Sort"}>
            <DropdownList>
              <DropdownItem>sort1</DropdownItem>
              <DropdownItem>sort2</DropdownItem>
            </DropdownList>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
