import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

type TTitleDefaultProps = {
  children: ReactNode;
  link: string;
};

export default function TitleDefault({ children, link }: TTitleDefaultProps) {
  return (
    <>
      <div className="flex h-[79px] gap-4">
        <div className="flex items-center rounded-full border-[4px] border-primary-500 py-[21.5px] pl-[20px] pr-[23px]">
          <Link href={`${link}`}>
            <Image
              src={"/images/arrow_left.svg"}
              alt={"arrow_left"}
              width={36}
              height={36}
            />
          </Link>
        </div>

        <div
          className={
            "flex w-full items-center rounded-full px-[15.5px] pl-[32px] text-[40px] font-normal text-primary-500 outline outline-4"
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}
