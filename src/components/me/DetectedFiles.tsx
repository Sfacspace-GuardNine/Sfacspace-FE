"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import DetectedCard from "@/components/DetectedCard";

import "../../styles/swiper-navigation.css";

export default function DetectedFiles() {
  const dummyData = [
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
    { label: "label", name: "소속 파일" },
  ];

  return (
    <>
      <div className={""}>
        <Swiper
          modules={[Navigation]}
          loop={false}
          navigation={true}
          slidesPerView={1}
          slidesPerGroup={1}
        >
          <SwiperSlide>
            <div className={"grid w-full grid-cols-4 gap-6"}>
              {dummyData.map((value, index) => (
                <DetectedCard
                  label={value.label}
                  fileName={value.name}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"grid w-full grid-cols-4 gap-6"}>
              {dummyData.map((value, index) => (
                <DetectedCard
                  label={"label"}
                  fileName={"소속 파일"}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*<div className={"relative w-full"}>
        <div className={"grid grid-cols-4 gap-6"}>
           더미 데이터
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />
          <DetectedCard label={"label"} fileName={"소속 파일"} />

           버튼
           prev
          <button
            type={"button"}
            className={
              "absolute start-[-26px] top-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white outline outline-1 outline-[#3F3F3F]"
            }
          >
            <Image
              src={"/icons/arrow-left.svg"}
              alt={"prev"}
              width={12}
              height={22}
            />
          </button>
           next
          <button
            type={"button"}
            className={
              "absolute end-[-26px] top-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white outline outline-1 outline-[#3F3F3F]"
            }
          >
            <Image
              src={"/icons/arrow-right.svg"}
              alt={"prev"}
              width={12}
              height={22}
            />
          </button>
        </div>
      </div>*/}
    </>
  );
}
