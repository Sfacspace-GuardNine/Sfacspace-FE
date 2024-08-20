import Image from "next/image";

export default function MainDivSecond() {
  return (
    <>
      <div className={"relative h-screen overflow-x-hidden bg-primary-50"}>
        <div
          className={
            "container mx-auto flex h-full items-center justify-between"
          }
        >
          <div className={"flex flex-col gap-[60px]"}>
            <p className={"text-[80px] font-bold text-primary-500"}>
              쉽고 편하게 <br />
              취약점을 발견하다
            </p>
            <div className={"flex flex-col gap-7"}>
              <p className={"text-[32px] font-bold text-[#3F3F3F]"}>
                코드 보안 <br />
                어떻게 관리하시나요?
              </p>
              <span className={"text-xl text-[#969696]"}>
                플로디텍터는 안전한 소프트웨어 개발을 위한 필수 도구로, <br />
                코드의 보안 취약점을 사전에 수정함으로써 <br />
                개발자들에게 편의와 안전한 개발 환경을 제공합니다.
              </span>
            </div>
          </div>
          <div className={"relative z-20"}>
            <div
              className={
                "rounded-lg bg-white px-[93px] py-[95px] shadow-[0_60px_60px_0_rgba(97,0,255,0.25)]"
              }
            >
              <Image
                src={"/images/logo_bug.svg"}
                alt={"logo"}
                width={190}
                height={196}
                className={""}
              />
            </div>
          </div>
        </div>
        <div className={"absolute right-0 top-0"}>
          <Image
            src={"/images/main-square-bg.svg"}
            alt={"square"}
            width={1065}
            height={1022}
            className={"h-screen translate-x-[50%]"}
          />
        </div>
      </div>
    </>
  );
}
