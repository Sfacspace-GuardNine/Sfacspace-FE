"use client";

import React, { useState } from "react";

import Image from "next/image";

function BookmarkButton({ isHovered }: { isHovered: boolean }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={toggleChecked} className="cursor-pointer">
      {isChecked ? (
        <Image
          src="/icons/bookmark-on-icon.svg"
          alt="북마크호버"
          width={21}
          height={20}
        />
      ) : (
        isHovered && (
          <Image
            src="/icons/bookmark-yet-icon.svg"
            alt="북마크온"
            width={21}
            height={20}
          />
        )
      )}
    </div>
  );
}

export default BookmarkButton;
