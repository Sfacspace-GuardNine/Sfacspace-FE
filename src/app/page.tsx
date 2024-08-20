import Image from "next/image";

import Button from "@/components/Button";
import Floating from "@/components/Floating";
import Gnb from "@/components/Gnb";
import MainCarousel from "@/components/page/main/MainCarousel";
import MainThird from "@/components/page/main/MainThird";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="h-auto">
          <Gnb />
        </div>
        <div className="flex flex-grow items-center justify-center bg-concentric-circles bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-light leading-[76px] tracking-wide text-primary-500">
              Find your Flaw,
            </div>
            <div className="mt-5 rounded-full border-4 border-primary-500 px-10 py-[18.5px] text-[60px] leading-[72px] tracking-wide text-primary-500">
              FlawDetector
            </div>
            <p className="text-5 mt-10 leading-6 tracking-tighter text-primary-500">
              인공지능의 뛰어난 분석 능력을 활용하여 코드의 보안 취약점을
              신속하게 해결하세요.
            </p>
            <Button variant="fill" shape="round" className="mt-[65px]">
              Login
            </Button>
            <Image
              src="/icons/caretdouble-down.svg"
              alt="더블다운"
              width={38.5}
              height={38.5}
              className="mt-[74px]"
            />
          </div>
        </div>

        <Floating variant="top" className="fixed bottom-[71px] right-20">
          TOP
        </Floating>
      </div>
      <div className="flex h-screen bg-primary-50">
        <div className="py-[275px] pl-[192px] pr-[452px]">
          <div className="mb-3 mt-3 text-[80px] font-bold tracking-tighter text-primary-500">
            <p>쉽고 편하게</p>
            <p>취약점을 발견하다</p>
          </div>
          <div className="mt-[60px] text-[32px] font-bold tracking-tighter">
            <p>코드 보안</p>
            <p>어떻게 관리하시나요?</p>
          </div>
          <div className="mt-7 text-xl font-medium text-[#969696]">
            <p>플로디텍터는 안전한 소프트웨어 개발을 위한 필수도구로,</p>
            <p>코드의 보안 취약점을 사전에 수정함으로써</p>
            <p>개발자들에게 편의와 안전한 개발환경을 제공합니다.</p>
          </div>
        </div>
        <div className="relative flex min-h-screen items-center justify-center">
          <Image
            src="/images/purple-square.svg"
            alt="메인마름모"
            width={283}
            height={283}
            className="z-5 absolute right-[8%] top-[18%] translate-x-1/2 transform"
          />
          <Image
            src="/images/purple-square.svg"
            alt="메인마름모"
            width={283}
            height={283}
            className="z-5 absolute bottom-[25%] right-[8%] translate-x-1/2 transform"
          />
          <Image
            src="/icons/main-mark.svg"
            alt="메인2페이지마크"
            width={381}
            height={382}
            className="z-10"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <Image
            src="/images/half-square.svg"
            alt="메인마름모"
            width={200}
            height={200}
            className="self-end"
          />
          <Image
            src="/images/half-square.svg"
            alt="메인마름모"
            width={200}
            height={200}
            className="self-end"
          />
        </div>
      </div>
      <MainThird />
      <div className="bg-primary-500 py-[142px]">
        <div className="mx-auto mb-[121px] text-center text-6xl font-bold tracking-tighter text-white">
          <p>안전과 보호를 우선으로 하는</p>
          <p>프로세스를 제공합니다.</p>
        </div>
        <MainCarousel />
      </div>
    </>
  );
}
