"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MainCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "24px",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="mx-4 mr-[24px] h-[461px] w-[339px] rounded-[40px] bg-white"
          >
            <div className="mx-auto mb-[27px] mt-[60px] flex h-[46px] w-[198px] items-center justify-center rounded-full border border-[#A54CFF] bg-[#F5E4FF] px-3 py-2">
              <p className="text-center text-[20px] font-medium tracking-tighter text-[#A54CFF]">
                사용자 데이터 보호
              </p>
            </div>
            <p className="text-center text-[120px] leading-[180px]">⚙️</p>
            <div className="mt-[37.5px] text-center tracking-tighter text-[#606060]">
              <p>최신 보안 동향 및 취약점 정보 실시간 제공</p>
              <p>개발자 보안 강화를 도움</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;
