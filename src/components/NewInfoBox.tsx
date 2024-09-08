import React from "react";

import Image from "next/image";

function NewInfoBox() {
  return (
    <div className="font-Pretendard flex w-[247px] flex-col gap-4 px-2 text-[20px] font-medium">
      <div className="flex justify-between">
        <div className="flex gap-[10px] py-[5px]">
          <Image
            src={"/images/info_error.svg"}
            alt={"error"}
            width={18}
            height={18}
          />
          <div>검출된 취약점</div>
        </div>
        <p className="py-[5px]">12</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[10px] py-[5px]">
          <Image
            src={"/images/info_warning.svg"}
            alt={"warning"}
            width={18}
            height={18}
          />
          <div>수정제안</div>
        </div>
        <p className="py-[5px]">8</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[10px] py-[5px]">
          <Image
            src={"/images/info_success.svg"}
            alt={"warning"}
            width={22}
            height={22}
          />
          <div>문제 없음</div>
        </div>
        <p className="py-[5px]">23</p>
      </div>
    </div>
  );
}

export default NewInfoBox;
