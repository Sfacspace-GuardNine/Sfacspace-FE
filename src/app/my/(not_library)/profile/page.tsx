import React from "react";

import GnbTitle from "@/components/GnbTitle";
import UserProfileHeader from "@/components/my/UserProfileHeader";

export default function ProfilePage() {
  return (
    <>
      <UserProfileHeader />
      <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />
      <div className={"text-[#3F3F3F]"}>
        {/* 내 정보 */}
        <p className={"pb-12 text-[32px] font-semibold"}>내 정보</p>
        <div className={"flex flex-col gap-4"}>
          <span className={"font-medium] text-[24px]"}>계정</span>
          {/* 임시 input */}
          <input className={"h-[51px] max-w-[866px]"} disabled />
        </div>
        <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

        {/* 라이브러리 */}
        <p className={"pb-12 text-[32px] font-semibold"}>라이브러리</p>
        <div className={"flex flex-col gap-9"}>
          <GnbTitle link={"/my/library/detected"} className={"text-2xl"}>
            검출된 파일
          </GnbTitle>
          <GnbTitle link={"/my/library/clipping"} className={"text-2xl"}>
            스크랩
          </GnbTitle>
        </div>
        <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

        {/* 설정 등 */}
        <div className={"flex flex-col gap-9"}>
          <GnbTitle link={"/my/setting"} className={"text-2xl"}>
            설정
          </GnbTitle>
          <GnbTitle link={"/my/help"} className={"text-2xl"}>
            고객센터
          </GnbTitle>
        </div>
      </div>
    </>
  );
}
