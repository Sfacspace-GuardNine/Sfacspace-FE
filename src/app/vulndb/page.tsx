"use client";

import { useEffect, useState } from "react";

import { DocumentData, QueryDocumentSnapshot } from "@firebase/firestore";
import Link from "next/link";

import CardHovered from "@/components/CardHovered";
import OnlyCard from "@/components/OnlyCard";
import Pagination from "@/components/Pagination";
import Ranking from "@/components/Ranking";
import SuggestionChip from "@/components/SuggestionChip";
import { getHotArticles, getNewArticles } from "@/server/article.action";

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

export default function VulnDBPage({
  searchParams,
}: {
  searchParams: { types: "hot" | "new"; page: number };
}) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [data, setData] = useState<DocumentData[]>([]);
  const [articleTypes, setArticleTypes] = useState("hot");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const handlePageButton = (page: number) => {
    setCurrentPage(() => page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (hoveredIndex === null) {
      setHoveredIndex(0);
    }
  }, [hoveredIndex]);

  useEffect(() => {
    if (["hot", "new"].includes(searchParams.types)) {
      setArticleTypes(searchParams.types);
    }

    if (searchParams.types === "new") {
      getNewArticles(5, lastVisible).then((res) => {
        setData(res.docs);
        setLastVisible(res.last);
      });
    } else if (
      searchParams.types === "hot" ||
      searchParams.types === undefined
    ) {
      getHotArticles(5, lastVisible).then((res) => {
        setData(res.docs);
        setLastVisible(res.last);
      });
    }
  }, [searchParams, currentPage]);

  return (
    <div className="mt-[13px]">
      <main className="container mx-auto max-w-[1314px]">
        <div className="flex w-full flex-col items-center gap-[60px] pt-[76px]">
          <div className="flex w-full gap-[28px]">
            {data &&
              data
                .slice(0, 3)
                .map((data, index) => (
                  <CardHovered
                    key={index}
                    title={data.data.title}
                    createdAt={data.data.created_at.toDate()}
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
                <Link href={"/vulndb?types=hot"}>
                  <SuggestionChip
                    variant="hot"
                    text="HOT"
                    isDisabled={articleTypes !== "hot"}
                  />
                </Link>
                <Link href={"/vulndb?types=new"}>
                  <SuggestionChip
                    variant="new"
                    text="NEW"
                    isDisabled={articleTypes !== "new"}
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-[16px]">
                {data.map((item) => (
                  <Link href={`/vulndb/${item.id}`} key={item.id}>
                    <OnlyCard
                      title={item.data.title}
                      type={articleTypes}
                      description={item.data.content_text.slice(0, 100)}
                      publishedAt={item.data.published_at}
                      source={item.data.source.toUpperCase()}
                    />
                  </Link>
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
            <Pagination
              size={10}
              start={currentPage}
              onClickPageButton={handlePageButton}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
