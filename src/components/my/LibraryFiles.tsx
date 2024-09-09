"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FileCard from "@/components/FileCard";

import "../../styles/swiper-navigation.css";

type TRepository = {
  id: string;
  name: string;
  description: string;
  owner: string;
  isBookmarked?: boolean;
  created_at: string;
};

type TLibraryFilesProps = {
  repos: TRepository[];
};

export default function LibraryFiles({ repos }: TLibraryFilesProps) {
  return (
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
            {repos.map((repo) => (
              <FileCard
                key={repo.id}
                title={repo.name}
                caption={repo.description}
                link={`/my/library/groups/${repo.owner}/${repo.name}`}
              />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
