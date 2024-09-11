"use client";

import { useEffect, useState } from "react";

import { DocumentData } from "@firebase/firestore";
import parse from "html-react-parser";
import Image from "next/image";

import Floating from "@/components/Floating";
import SmallCard from "@/components/SmallCard";
import SuggestionChip from "@/components/SuggestionChip";
import { getArticleDetails } from "@/server/article.action";

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

export default function VulnDBPostPage({
  params,
}: {
  params: { postId: number };
}) {
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    getArticleDetails(params.postId).then((res) => setData(res));
  }, []);

  return (
    <>
      {data && (
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
                    <span className="text-4xl font-medium">{data.title}</span>
                  </div>
                  <div className="flex gap-[36px] pt-[32px] text-xl text-[#969696]">
                    <span>{data.source.toUpperCase()}</span>
                    <span>{`출시 시간 | ${data.published_at}`}</span>
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
              {parse(data.content_html)}
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
      )}
    </>
  );
}
