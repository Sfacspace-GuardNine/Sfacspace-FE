import { ComponentProps, ReactNode } from "react";

import Link from "next/link";

type TGnbTitleProps = {
  children: ReactNode;
  link: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function GnbTitle({
  children,
  link,
  className,
  ...rest
}: TGnbTitleProps) {
  return (
    <>
      <Link
        href={`${link}`}
        className={`w-fit text-lg font-medium text-[#3f3f3f] hover:text-primary-500 ${className}`}
        {...rest}
      >
        <p>{children}</p>
      </Link>
    </>
  );
}
