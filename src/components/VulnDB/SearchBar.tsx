import React from "react";

import Image from "next/image";

function SearchBar() {
  return (
    <div className="h-[82px] w-full rounded-[15px] bg-gradient-to-r from-[#6100FF] to-[#4F6BFF] p-[1px]">
      <div className="rounded-[14px] bg-white">
        <form className="flex h-full">
          <input
            type="text"
            className="mx-auto my-6 ml-6 h-[32px] w-full border-none outline-none placeholder:text-[24px] placeholder:text-[#D6D6D6]"
            placeholder="검색어를 입력해주세요."
          />
          <Image
            src="/icons/search-icon.svg"
            alt="search-button"
            width={26}
            height={26}
            className="my-auto mr-7"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
