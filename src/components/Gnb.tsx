import Image from "next/image";
import Link from "next/link";

import GnbTitle from "@/components/GnbTitle";

export default function Gnb() {
  return (
    <>
      <header
        className={
          "flex h-[136px] w-full items-center justify-between px-12 py-20"
        }
      >
        <div className={"flex items-center gap-[100px]"}>
          <Link href={"/"}>
            <Image
              src={"/images/flawdetector-logo.svg"}
              alt={"logo"}
              width={378.5}
              height={40}
            />
          </Link>
          <GnbTitle link={""}>취약점 DB</GnbTitle>
        </div>
        <div>
          <GnbTitle link={"/my/library"}>MY 저장소</GnbTitle>
        </div>
      </header>
    </>
  );
}
