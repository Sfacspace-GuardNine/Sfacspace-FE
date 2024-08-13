import { ReactNode } from "react";

import Link from "next/link";

type TRankingItemProps = {
  children: ReactNode;
  link: string;
};

export default function RankingItem({ children, link }: TRankingItemProps) {
  return (
    <>
      <li className={"flex py-4 text-lg font-medium hover:text-primary-500"}>
        <Link href={`${link}`} className={"w-full"}>
          {children}
        </Link>
      </li>
    </>
  );
}
