import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        className={
          "h-[324px] w-full bg-background-purpleLight bg-[url('/images/footer-pattern.svg')] bg-cover px-20 py-[60px]"
        }
      >
        <div className={"text-base font-medium text-[#3F3F3F]"}>
          <Image
            src={"/images/sfacspace-logo.svg"}
            alt={"logo"}
            width={120}
            height={55}
          />
          <p className={"mb-2 mt-[38px] text-[20px] font-semibold"}>CONTACT</p>
          <div className={"flex justify-between font-medium"}>
            <div className={"flex"}>
              <div className="mr-10 flex flex-col gap-1">
                <div className={"flex gap-[26px]"}>
                  <span className={"text-[#969696]"}>(주)스팩스페이스</span>
                  <div className={"flex gap-[11px]"}>
                    <span className={"text-[#969696]"}>대표자</span>
                    <span>염민호</span>
                  </div>
                </div>
                <span>서울 강서구 마곡중앙2로 11, 3층 303호</span>
                <div className={"flex gap-[23px]"}>
                  <span className={"text-[#969696]"}>Email</span>
                  <span>admin@sfacspace.com</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className={"flex gap-[7px]"}>
                  <span className={"text-[#969696]"}>사업자등록번호</span>
                  <span>450-87-01864</span>
                </div>
                <div className={"flex gap-[13px]"}>
                  <span className={"text-[#969696]"}>대표전화</span>
                  <span>02-6217-1119</span>
                </div>
                <div className={"flex gap-[30px]"}>
                  <span className={"text-[#969696]"}>팩스</span>
                  <span>02-6217-1115</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 text-right">
              <div className={"flex gap-8 text-[#969696] underline"}>
                <Link href={""}>회사소개</Link>
                <Link href={""}>서비스이용약관</Link>
                <Link href={""}>개인정보처리방침</Link>
              </div>
              <p>Ⓒ Spacspace.All right reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
