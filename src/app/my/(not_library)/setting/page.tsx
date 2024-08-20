import React from "react";

import Switch from "@/components/Switch";

export default function SettingPage() {
  return (
    <>
      <div className={"text-[#3F3F3F]"}>
        {/* 계정 유형 */}
        <div className={"flex items-center gap-8"}>
          <span className={"text-[32px] font-semibold"}>계정 유형</span>
          <span className={"font-medium] text-[24px]"}>깃허브 연동</span>
        </div>
        <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

        {/* 알림 */}
        <p className={"pb-12 text-[32px] font-semibold"}>알림</p>
        <div className={"flex items-center justify-between"}>
          <span className={"font-medium] text-[24px]"}>이메일로 알림 받기</span>
          <Switch />
        </div>
      </div>
    </>
  );
}
