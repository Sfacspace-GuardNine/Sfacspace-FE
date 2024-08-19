"use client";

import Image from "next/image";

import Floating from "@/components/Floating";
import SmallCard from "@/components/SmallCard";
import SuggestionChip from "@/components/SuggestionChip";
import VulnerabilityTable from "@/components/VulnDB/VulnerabilityTable";

const dummyData = {
  title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
  createdAt: "2024.03.08 13:30:24",
  description:
    "최근 Microsoft는 다양한 보안 취약점에 대한 공지를 공식적으로 발표했으며, 이 취약점 공지에는 총 80개의 취약점 패치가 발표되었습니다. ",
  daysAgo: 5,
  author: "취약성 뉴스 세부정보",
};

const dummyPosts = [
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

const DummyVulnData = [
  {
    number: 1,
    name: "Microsoft Azure 취약점 패치",
    cnnvd: "CNNVD-202403-3601",
    cve: "CVE-2024-21964",
    link: "https://microsoft.com/update/vulnerability/CVE-2024-21964",
    severity: "취약 위험",
    cveNumber: "https://msrc.microsoft.com",
  },
  {
    number: 2,
    name: "Microsoft Azure 취약점 패치",
    cnnvd: "CNNVD-202403-3602",
    cve: "CVE-2024-21965",
    link: "https://microsoft.com/update/vulnerability/CVE-2024-21965",
    severity: "취약 위험",

    cveNumber: "https://msrc.microsoft.com",
  },
];

export default function VulnDBPostPage() {
  return (
    <div className="mt-[13px]">
      <main className="container mx-auto flex max-w-[1314px] flex-col gap-[60px]">
        <div className="border-b-1 flex w-full items-end justify-between border-b border-[#C3C3C3] pb-[60px] pt-[28px]">
          <div className="max-x-[1046px] flex w-full max-w-[1314px] flex-col gap-[60px]">
            <div className="w-full">
              <div className="flex flex-col gap-[20px]">
                <SuggestionChip
                  variant="hot"
                  text="HOT"
                  className="max-w-max"
                  disabled
                />
                <span className="text-4xl font-medium">{dummyData.title}</span>
              </div>
              <div className="flex gap-[36px] pt-[32px] text-xl text-[#969696]">
                <span>{dummyData.author}</span>
                <span>{`출시 시간 | ${dummyData.createdAt}`}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <button>
              <Image
                src="/icons/pin-icon.svg"
                alt="pin"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </button>
            <button>
              <Image
                src="/icons/share-icon.svg"
                alt="share"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1284px] pb-[60px] text-2xl">
          <span>{dummyData.description}</span>
        </div>

        <div>
          <VulnerabilityTable items={DummyVulnData} />
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className="text-2xl font-semibold"> 비슷한 정보글</span>
          <div className="grid grid-cols-1 gap-[36px] sm:grid-cols-2 md:grid-cols-3">
            {dummyPosts.slice(0, 6).map((data, index) => (
              <SmallCard
                key={index}
                title={data.title}
                daysAgo={data.daysAgo}
                description={data.description}
              />
            ))}
          </div>
        </div>
        <div className="fixed bottom-[100px] right-[70px]">
          <Floating />
        </div>
      </main>
    </div>
  );
}
