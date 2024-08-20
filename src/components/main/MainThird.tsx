import React from "react";

import Image from "next/image";

function MainThird() {
  return (
    <div className="flex justify-between">
      <div>
        <Image
          src="/images/main-warning.svg"
          alt="메인예시"
          width={725}
          height={976}
          className="ml-[192px] mt-[95px]"
        />
      </div>
      <div className="mr-[145px] mt-[371px] text-right">
        <div className="mb-[34px] text-[60px] font-bold tracking-tighter text-primary-500">
          <p>최신 보안 동향을</p>
          <p>실시간으로 확인하세요.</p>
        </div>
        <div className="text-xl font-medium tracking-tighter text-[#969696]">
          <p>실시간으로 최신 보안 동향을 제공하여</p>
          <p>개발자들이 보안 취약점에 대한 최신 정보를 받을 수 있어</p>
          <p>보안 강화를 위한 코딩 관행을 지속적으로 개선할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default MainThird;
