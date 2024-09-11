"use client";

import React from "react";

import Image from "next/image";

import useBookmarkStore from "@/stores/useBookmarkStore";

type TBookmarkButtonProps = {
  variant?: "light" | "deep";
  isHovered: boolean;
  width?: number;
  height?: number;
  repoId?: string;
  sha?: string;
};

function BookmarkButton({
  variant = "deep",
  isHovered,
  width = 21,
  height = 20,
  repoId,
  sha,
}: TBookmarkButtonProps) {
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isCheckedRepo = repoId ? bookmarks.repos.includes(repoId) : false;
  const isCheckedFile = sha ? bookmarks.files.includes(sha) : false;

  const handleToggle = () => {
    if (repoId) toggleBookmark(repoId, "repo");
    if (sha) toggleBookmark(sha, "file");
    console.log(
      `${repoId || sha} ${isCheckedRepo || isCheckedFile ? "북마크 해제됨" : "북마크됨"}`,
    );
  };

  return (
    <div onClick={handleToggle} className="cursor-pointer">
      {isCheckedRepo || isCheckedFile ? (
        variant === "deep" ? (
          <Image
            src="/icons/bookmark-on-icon.svg"
            alt="북마크온"
            width={width}
            height={height}
          />
        ) : (
          <Image
            src="/images/filecard-star.svg"
            alt="북마크파일카드"
            width={width}
            height={height}
          />
        )
      ) : (
        isHovered && (
          <Image
            src="/icons/bookmark-yet-icon.svg"
            alt="북마크호버"
            width={width}
            height={height}
          />
        )
      )}
    </div>
  );
}

export default BookmarkButton;
