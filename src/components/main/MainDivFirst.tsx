import Image from "next/image";

import Button from "@/components/Button";

export default function MainDivFirst() {
  return (
    <>
      <div
        className={
          "flex h-screen snap-start flex-col items-center justify-center gap-[65px] bg-[url('/images/concentric-circles.svg')] bg-center text-primary-500"
        }
      >
        <div className={"relative flex flex-col items-center"}>
          <div className={"flex flex-col gap-5 text-[60px]"}>
            <p>Find your Flaw,</p>
            <p
              className={
                "rounded-full border-4 border-primary-500 bg-white px-8"
              }
            >
              FlawDetector
            </p>
          </div>
          <p className={"mt-10 text-xl"}>
            인공지능의 뛰어난 분석 능력을 활용하여 코드의 보안 취약점을 신속하게
            해결하세요.
          </p>
          <Button shape={"round"} className={"mt-[65px]"}>
            Login
          </Button>
          <Image
            src="/icons/caretdouble-down.svg"
            alt="더블다운"
            width={38.5}
            height={38.5}
            className={"absolute top-[calc(100%+65px)]"}
          />
        </div>
      </div>
    </>
  );
}
