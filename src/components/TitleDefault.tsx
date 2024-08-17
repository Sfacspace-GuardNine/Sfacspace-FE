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
      <Link href={`${link}`}>
        <div
          className={
            "flex h-[79px] w-fit items-center gap-6 rounded-full p-5 text-[40px] font-normal text-primary-500 outline outline-4"
          }
        >
          <Image
            src={"/images/arrow_left.svg"}
            alt={"arrow_left"}
            width={36}
            height={36}
          />
          {children}
        </div>
      </Link>
    </>
  );
}
