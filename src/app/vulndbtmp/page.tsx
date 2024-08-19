"use client";

import { useEffect, useState } from "react";

import CardHovered from "@/components/CardHovered";
import OnlyCard from "@/components/OnlyCard";
import Pagination from "@/components/Pagination";
import Ranking from "@/components/Ranking";
import SuggestionChip from "@/components/SuggestionChip";

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

const dummyItems = [
  "1. Topic",
  "2. 웹뷰 프레임 워크",
  "3. 허프만 코딩 구현",
  "4. 테스크 커버리지",
  "5. 코드형 인프라(IaC)",
  "6. 클린 아키텍쳐",
  "7. UI 라이브러리 개발",
  "8. AWS Personalize",
  "9. 키클락",
  "10. 클린 코어",
];

export default function VulnDBPage() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    if (hoveredIndex === null) {
      setHoveredIndex(0);
    }
  }, [hoveredIndex]);

  return (
    <div className="mt-[13px]">
      <main className="container mx-auto max-w-[1314px]">
        <div className="flex w-full flex-col items-center gap-[60px] pt-[76px]">
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

          <div className="flex w-full justify-between">
            <div className="flex w-full max-w-[865px] flex-col gap-[16px]">
              <span className="text-2xl font-semibold">취약점DB</span>
              <div className="flex gap-[12px]">
                <SuggestionChip variant="hot" text="HOT" isDisabled={false} />
                <SuggestionChip variant="new" text="NEW" isDisabled={true} />
              </div>
              <div className="flex flex-col gap-[16px]">
                {dummyData.map((data, index) => (
                  <OnlyCard
                    key={index}
                    title={data.title}
                    description={data.title}
                    daysAgo={data.daysAgo}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:w-auto">
              <div className="flex flex-col gap-[17px] pb-[16px]">
                <span className="text-2xl font-semibold">실시간 Topic</span>
                <span className="text-lg font-medium text-[#969696]">
                  03.08 10:00기 기준
                </span>
              </div>
              <Ranking items={dummyItems} />
            </div>
          </div>
          <div className="flex justify-center">
            <Pagination size={10} />
          </div>
        </div>
      </main>
    </div>
  );
}
