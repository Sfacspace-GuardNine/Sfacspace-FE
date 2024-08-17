import { ComponentProps, ReactNode } from "react";

import Link from "next/link";

type TGnbTitleProps = {
  children: ReactNode;
} & ComponentProps<typeof Link>;

export default function GnbTitle({ children, ...rest }: TGnbTitleProps) {
  return (
    <>
      <Link
        className={"text-lg font-medium text-[#3f3f3f] hover:text-primary-500"}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
}
