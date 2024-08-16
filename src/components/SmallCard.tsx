"use client";

import React, { useState } from "react";

import SmallImageCard from "./SmallImageCard";
import SmallOnlyCard from "./SmallOnlyCard";

type TSmallCardProps = {
  variant?: "outlined" | "elevated" | "filled";
  title: string;
  description: string;
  daysAgo: number;
};

function SmallCard({
  variant = "outlined",
  title,
  description,
  daysAgo,
}: TSmallCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsPressed(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {isPressed ? (
        <SmallImageCard
          status="pressed"
          title={title}
          description={description}
          daysAgo={daysAgo}
        />
      ) : isHovered ? (
        <SmallImageCard
          status="hover"
          title={title}
          description={description}
          daysAgo={daysAgo}
        />
      ) : (
        <SmallOnlyCard
          variant={variant}
          title={title}
          description={description}
          daysAgo={daysAgo}
        />
      )}
    </div>
  );
}

export default SmallCard;
