import React from "react";

import Image from "next/image";

type EditedCodeProps = {
  language?: string;
  codeDetail?: string;
};

function EditedCode({ language, codeDetail }: EditedCodeProps) {
  return (
    <div className="mt-8">
      <p className="font-pretendard text-[24px] font-semibold leading-[34px] text-[#3F3F3F]">
        수정된 코드
      </p>
      <div className="mt-[10px] flex flex-col gap-[10px] rounded-[10px] bg-neutral-80">
        <div className="flex h-[57px] items-center justify-between rounded-tl-[10px] rounded-tr-[10px] bg-neutral-80 px-5 py-4 text-[18px] text-[#D6D6D6]">
          <p>{language}</p>
          <div className="flex gap-[13px]">
            <Image
              src={`/images/duplicate-icon.svg`}
              alt={"코드복사"}
              width={18}
              height={18}
            />
            <p>코드복사</p>
          </div>
        </div>
        <div className="whitespace-pre-wrap rounded-bl-[10px] rounded-br-[10px] bg-neutral-80 px-5 py-4 text-[18px] text-[#D6D6D6]">
          {codeDetail}
        </div>
      </div>
    </div>
  );
}

export default EditedCode;
