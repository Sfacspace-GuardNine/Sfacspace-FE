import React from "react";

function NoData() {
  return (
    <div className="mt-[188px] font-pretendard">
      <p className="text-center text-[32px] font-semibold">
        취약점DB에 검색한 결과가 없어요.
      </p>
      <p className="text-center text-[24px] text-gray-500">
        다른 주제로 다시 검색해 보세요.
      </p>
    </div>
  );
}

export default NoData;
