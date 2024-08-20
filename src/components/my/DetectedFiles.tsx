"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FileCard from "@/components/FileCard";

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
      <div>
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
                <FileCard
                  title={value.name}
                  caption={value.name}
                  link={""}
                  variant={"detected"}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"grid w-full grid-cols-4 gap-6"}>
              {dummyData.map((value, index) => (
                <FileCard
                  title={value.name}
                  caption={value.name}
                  link={""}
                  variant={"detected"}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
