"use client";

import React, { useState } from "react";

import Image from "next/image";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <div className="h-[82px] w-full rounded-[15px] bg-gradient-to-r from-[#6100FF] to-[#4F6BFF] p-[1px]">
      <div className="rounded-[14px] bg-white">
        <form className="flex h-full" onSubmit={handleSearch}>
          <input
            type="text"
            className="mx-auto my-6 ml-6 h-[32px] w-full border-none outline-none placeholder:text-[24px] placeholder:text-[#D6D6D6]"
            placeholder="검색어를 입력해주세요."
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button>
            <Image
              src="/icons/search-icon.svg"
              alt="search-button"
              width={26}
              height={26}
              className="my-auto mr-7"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
