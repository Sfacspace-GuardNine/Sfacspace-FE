import { HTMLAttributes } from "react";

import Image from "next/image";

import PageButton from "./PageButton";

type TPaginationProps = HTMLAttributes<HTMLDivElement> & {
  start?: number;
  size: number;
  onClickPageButton: (page: number) => void;
};

const Pagination = ({
  start = 1,
  size,
  onClickPageButton,
  ...rest
}: TPaginationProps) => {
  const baseStyle = "flex";
  const pageNumberArr = Array.from({ length: size }, (_, i) => start + i);

  return (
    <div className={baseStyle} {...rest}>
      {pageNumberArr.map((page) => (
        <PageButton key={page} onClick={() => onClickPageButton(page)}>
          {page}
        </PageButton>
      ))}
      <PageButton>
        <Image
          src={"/images/arrow_right.svg"}
          alt={"file"}
          width={24}
          height={24}
        />
      </PageButton>
    </div>
  );
};

export default Pagination;
