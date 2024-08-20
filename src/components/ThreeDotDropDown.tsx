"use client";

import React, { useState } from "react";

import Image from "next/image";

import DropdownItem from "@/components/DropdownItem";
import DropdownList from "@/components/DropdownList";

export default function ThreeDotDropDown() {
  const [isDropDown, setIsDropDown] = useState(false);
  const onClickDropDown = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <>
      <div className="relative inline-block">
        <button onClick={onClickDropDown} className={"h-[17px] w-[3px]"}>
          <Image
            src="/icons/threedot-icon.svg"
            alt="dotIcon"
            width={3}
            height={17}
          />
        </button>
        {isDropDown && (
          <DropdownList className={"absolute right-[-6px]"}>
            <DropdownItem className={"px-5 py-3 text-xl"}>삭제</DropdownItem>
            <DropdownItem className={"px-5 py-3 text-xl"}>공유</DropdownItem>
          </DropdownList>
        )}
      </div>
    </>
  );
}
