import React from "react";

import Image from "next/image";

import { cn } from "@/utils/cn";

import BlurPopup from "../BlurPopup";
import SuggestionChip from "../SuggestionChip";

type TOnlyCardProps = {
  variant?: "outlined" | "elevated" | "filled";
};

const dummyData = [
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
  {
    title: "[취약성 경고] Mirosoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    createdAt: new Date("2024-08-16T00:00:00"),
    description:
      "Microsoft Corporation (NASDAQ: MSFT) announced Monday that it has identified several security vulnerabilities in its software products, including Office 365, Exchange Server, and SharePoint Online. The announcement comes amid a growing concern about the company's security posture.",
    daysAgo: 5,
  },
];

function OnlyCardBlur({ variant = "outlined" }: TOnlyCardProps) {
  const boxClass = cn(
    "w-full rounded-[8px] border border-[#C3C3C3] p-7",
    variant === "elevated"
      ? "bg-background-purpleLight shadow-lg"
      : variant === "filled"
        ? "bg-background-purpleDark"
        : "bg-neutral-white",
  );
  const descriptionClass = cn(
    "mt-6 w-full min-w-14 rounded-2xl p-5 text-[#797979]",
    variant === "elevated"
      ? "bg-neutral-white"
      : variant === "filled"
        ? "bg-background-grayLight"
        : "bg-background-grayLight",
  );

  return (
    <div className="relative">
      <BlurPopup>자세한 정보를 보고싶다면?</BlurPopup>
      {dummyData.map((data, index) => (
        <div key={index} className={boxClass}>
          <div className="flex">
            <SuggestionChip
              text="Hot"
              variant="hot"
              className="h-[35px] w-[59px]"
            />
            <p className="pl-2 pt-[11px] text-[20px] leading-6">{data.title}</p>
          </div>
          <div className="w-[71px] leading-[19px] text-[#ADADAD]">
            Microsoft
          </div>
          <div className={descriptionClass}>{data.description}</div>
          <div className="mt-6 flex justify-between">
            <div className="flex gap-4">
              <button>
                <Image
                  src="/icons/pin-icon.svg"
                  alt="pin"
                  width={20}
                  height={20}
                />
              </button>
              <button>
                <Image
                  src="/icons/share-icon.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className="text-[#A2A2A2]">{data.daysAgo}일 전</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnlyCardBlur;
