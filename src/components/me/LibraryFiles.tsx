"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FileCard from "@/components/FileCard";

import "../../styles/swiper-navigation.css";

export default function LibraryFiles() {
  const dummyData = [
    {
      label: "label",
      name: "sfacweb - 1",
      caption: "Caption",
      link: "/me/library/groups/1",
    },
    {
      label: "label",
      name: "sfacweb - 2",
      caption: "Caption",
      link: "/me/library/groups/2",
    },
    {
      label: "label",
      name: "sfacweb - 3",
      caption: "Caption",
      link: "/me/library/groups/3",
    },
    {
      label: "label",
      name: "sfacweb - 4",
      caption: "Caption",
      link: "/me/library/groups/4",
    },
    {
      label: "label",
      name: "sfacweb - 5",
      caption: "Caption",
      link: "/me/library/groups/5",
    },
    {
      label: "label",
      name: "sfacweb - 6",
      caption: "Caption",
      link: "/me/library/groups/6",
    },
    {
      label: "label",
      name: "sfacweb - 7",
      caption: "Caption",
      link: "/me/library/groups/7",
    },
    {
      label: "label",
      name: "sfacweb - 8",
      caption: "Caption",
      link: "/me/library/groups/8",
    },
    {
      label: "label",
      name: "sfacweb - 9",
      caption: "Caption",
      link: "/me/library/groups/9",
    },
    {
      label: "label",
      name: "sfacweb - 10",
      caption: "Caption",
      link: "/me/library/groups/10",
    },
    {
      label: "label",
      name: "sfacweb - 11",
      caption: "Caption",
      link: "/me/library/groups/11",
    },
    {
      label: "label",
      name: "sfacweb - 12",
      caption: "Caption",
      link: "/me/library/groups/12",
    },
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
            <div className={"grid w-full grid-cols-4 gap-x-6 gap-y-12"}>
              {dummyData.map((value, index) => (
                <FileCard
                  title={value.name}
                  caption={value.caption}
                  link={value.link}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"grid w-full grid-cols-4 gap-x-6 gap-y-12"}>
              {dummyData.map((value, index) => (
                <FileCard
                  title={value.name}
                  caption={value.caption}
                  link={value.link}
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
