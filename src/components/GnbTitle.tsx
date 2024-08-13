import { ReactNode } from "react";

import Link from "next/link";

type TGnbTitleProps = {
  children: ReactNode;
  link: string;
};

export default function GnbTitle({ children, link }: TGnbTitleProps) {
  return (
    <>
      <Link
        href={`${link}`}
        className={"text-lg font-medium text-[#3f3f3f] hover:text-primary-500"}
      >
        {children}
      </Link>
    </>
  );
}
