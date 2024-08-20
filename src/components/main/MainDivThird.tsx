import React from "react";

import Image from "next/image";

export default function MainDivThird() {
  const dummyData = `import SectionBusinessForever from "@/components/section-business-forever";
import SectionVideoDisplayer from "@/components/section-video-displayer";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-36 min-h-screen"
    // only background brightness is 0.5
      style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.svg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <hgroup className="flex flex-col items-center py-16 gap-4 z-10">
        <Badge>Systemable</Badge>
        <h1 className="text-6xl font-bold">Build once, Business forever</h1>
        <p className="text-sm">
          We help businesses to grow and scale by providing them with the right
          tools and resources.
        </p>
      </hgroup>
      <div className="z-10 grid grid-cols-2 max-w-4xl mx-auto gap-4 my-24">
        <Card className="bg-transparent backdrop-blur-sm col-span-2">
          <CardHeader>
            <CardTitle>Analyze</CardTitle>
            <CardDescription>
              We analyze your business processes and provide you with the right ways to make sure your business is running smoothly.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-transparent backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Systemize</CardTitle>
            <CardDescription>
              We find the ways to systemize your business processes to make sure you are not wasting time on repetitive tasks.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-transparent backdrop-blur-sm">`;

  return (
    <>
      <div
        className={
          "container mx-auto flex h-screen justify-between overflow-y-hidden"
        }
      >
        <div
          className={
            "mt-[94.5px] flex min-h-[976px] w-[725px] flex-col gap-8 rounded-lg border border-[#B3B3B3] p-10"
          }
        >
          <div className={"flex w-full flex-col items-center gap-6"}>
            <Image
              src={"/images/analyzing-icon.svg"}
              alt={"analyzing"}
              width={40}
              height={40}
            />
            <div
              className={
                "flex h-11 w-full max-w-[410px] items-center justify-center rounded-lg bg-primary-50 text-xl text-primary-500 outline outline-1 outline-primary-500"
              }
            >
              취약성 실시간 검사중
            </div>
          </div>

          {/* 코드 영역 */}
          <pre className={"whitespace-pre-wrap text-[#171717] blur-sm"}>
            {dummyData}
          </pre>
        </div>
        <div className={"flex h-full flex-col justify-center gap-[34px]"}>
          <p
            className={
              "text-right text-[60px] font-bold tracking-tighter text-primary-500"
            }
          >
            최신 보안 동향을 <br />
            실시간으로 확인하세요.
          </p>
          <span className={"text-right text-xl text-[#969696]"}>
            실시간으로 최신 보안 동향을 제공하여 <br />
            개발자들이 보안 취약점에 대한 최신 정보를 받을 수 있어
            <br />
            보안 강화를 위한 코딩 관행을 지속적으로 개선할 수 있습니다.
          </span>
        </div>
      </div>
    </>
  );
}
