"use client";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ServiceCard from "@/components/ServiceCard";

export default function MainDivFourth() {
  return (
    <>
      <div className={"h-screen bg-primary-500"}>
        <div
          className={
            "flex h-full flex-col items-center justify-center gap-[121px]"
          }
        >
          <p className={"text-center text-[60px] font-bold text-white"}>
            안전과 보호를 우선으로 하는
            <br />
            프로세스를 제공합니다.
          </p>

          {/* 캐러셀 */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={7000}
            slidesPerView={6}
            spaceBetween={350}
            slidesPerGroup={1}
            className={"w-full"}
          >
            <SwiperSlide>
              <ServiceCard variant={"pink"} label={"보안 강화"}>
                <span>
                  보안 취약점 사전 식별 후 해결
                  <br />
                  소프트웨어 보안성 강화
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                variant={"green"}
                label={"미션 크리티컬한 개발에 적합"}
              >
                <span>
                  미션 크리티컬한 개발 특별 제작
                  <br />
                  안전한 솔루션 제공
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"purple"} label={"실시간 보안 업데이트"}>
                <span>
                  최신 보안 동향 및 취약점 정보 실시간 제공
                  <br />
                  개발자 보안 강화를 도움
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"blue"} label={"사용자 데이터 보호"}>
                <span>
                  데이터 무단 액세스 및 정보 유출 방지
                  <br />
                  개인 정보 안전하게 보호
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"yellow"} label={"효율적인 개발"}>
                <span>
                  보안 취약점 자동 분석후 수정
                  <br />
                  개발 집중 및 생산성 향상
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"red"} label={"신속한 대응과 수정"}>
                <span>
                  발견된 취약점 대응 및 수정
                  <br />
                  안전한 소프트웨어 개발 가능
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"pink"} label={"보안 강화"}>
                <span>
                  보안 취약점 사전 식별 후 해결
                  <br />
                  소프트웨어 보안성 강화
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                variant={"green"}
                label={"미션 크리티컬한 개발에 적합"}
              >
                <span>
                  미션 크리티컬한 개발 특별 제작
                  <br />
                  안전한 솔루션 제공
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"purple"} label={"실시간 보안 업데이트"}>
                <span>
                  최신 보안 동향 및 취약점 정보 실시간 제공
                  <br />
                  개발자 보안 강화를 도움
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"blue"} label={"사용자 데이터 보호"}>
                <span>
                  데이터 무단 액세스 및 정보 유출 방지
                  <br />
                  개인 정보 안전하게 보호
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"yellow"} label={"효율적인 개발"}>
                <span>
                  보안 취약점 자동 분석후 수정
                  <br />
                  개발 집중 및 생산성 향상
                </span>
              </ServiceCard>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard variant={"red"} label={"신속한 대응과 수정"}>
                <span>
                  발견된 취약점 대응 및 수정
                  <br />
                  안전한 소프트웨어 개발 가능
                </span>
              </ServiceCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
