import { ReactNode } from "react";

import Image from "next/image";

import Label from "@/components/Label";

type TServiceCardProps = {
  variant: "pink" | "green" | "purple" | "blue" | "yellow" | "red";
  label: string;
  children: ReactNode;
};

export default function ServiceCard({
  children,
  label,
  variant,
}: TServiceCardProps) {
  return (
    <>
      <div
        className={
          "flex h-[460px] w-[340px] flex-col items-center justify-between rounded-[40px] bg-white pb-[65px] pt-[52px] shadow-[0_80px_60px_-40px_rgba(0,0,0,0.25)]"
        }
      >
        <Label variant={variant}>{label}</Label>
        <Image
          src={`./images/service-card/service_card_${variant}.png`}
          alt={"lock"}
          width={120}
          height={180}
          className={"pt-[28px]"}
        />
        <span
          className={
            "whitespace-pre-line text-center text-base leading-[26px] tracking-tight text-[#606060]"
          }
        >
          {children}
        </span>
      </div>
    </>
  );
}
