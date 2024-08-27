"use client";

import { useEffect, useState } from "react";
import React from "react";

import CardHovered from "@/components/CardHovered";

const dummyData = [
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
];

function VulCardHovered() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    if (hoveredIndex === null) {
      setHoveredIndex(0);
    }
  }, [hoveredIndex]);

  return (
    <div className="flex w-full gap-[28px]">
      {dummyData.slice(0, 3).map((data, index) => (
        <CardHovered
          key={index}
          title={data.title}
          createdAt={data.createdAt}
          index={index}
          isHovered={hoveredIndex === index}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}

export default VulCardHovered;
