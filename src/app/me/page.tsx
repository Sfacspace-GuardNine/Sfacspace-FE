import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

export default function MyLibraryPage() {
  return (
    <>
      {/* 상단 */}
      <div
        className={
          "flex w-full flex-col items-center gap-5 pb-[124px] pt-[69px] text-center text-[60px] text-primary-500"
        }
      >
        <p className={"font-light"}>containing code files</p>
        <p
          className={
            "w-fit rounded-full px-10 outline outline-4 outline-primary-500"
          }
        >
          MY Library
        </p>
      </div>

      {/* 내 정보 */}
      <div className={"flex w-full items-center justify-between"}>
        <div className={"flex gap-11"}>
          <Image
            width={107}
            height={107}
            src={"https://api.dicebear.com/9.x/identicon/svg"}
            alt={"avatar"}
            className={"rounded-full"}
          />
          <span className={"text-[40px] font-medium text-[#3F3F3F]"}>
            Hello,
            <br />
            example{}
          </span>
        </div>
        <Link href={"/"}>
          <Button
            variant={"outline"}
            className={"h-fit border-2 border-primary-500"}
            shape={"square"}
            size={"md"}
          >
            프로필 정보
          </Button>
        </Link>
      </div>
      <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

      {/* 라이브러리 */}
      <div className={"gap-12 pb-[124px]"}>
        <div>
          <span className={"text-[32px] font-medium text-[#3F3F3F]"}>
            Library
          </span>
          {/* 드랍박스 영역 */}
        </div>
        <div className={"grid grid-cols-3"}>{/* 카드 영역 */}</div>
      </div>
    </>
  );
}
