import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";

import { cn } from "@/utils/cn";

dayjs.locale("ko");

type TChatText = {
  time: Date;
  isUser: boolean;
} & React.ComponentProps<"div">;

export default function ChatText({ time, isUser, children }: TChatText) {
  return (
    <>
      <div className={cn("flex items-start gap-2", { "justify-end": isUser })}>
        {!isUser && (
          <Image
            src={"/icons/chat-oper-icon.svg"}
            alt={"oper"}
            width={62}
            height={62}
          />
        )}
        <div className={"flex items-end gap-1"}>
          <div className={"flex flex-col gap-1"}>
            {!isUser && <p className={"text-xl"}>플로디텍터 운영자</p>}
            <p
              className={cn(
                "max-w-[300px] whitespace-pre-line rounded-[20px] px-2 py-3",
                { "rounded-tr-none bg-primary-500 text-white": isUser },
                { "rounded-tl-none bg-[#F7F7F7]": !isUser },
              )}
            >
              {HTMLReactParser(children as string)}
            </p>
          </div>
          <p
            className={cn("text-sm text-[#8B8F93]", { "order-first": isUser })}
          >
            {dayjs(time).format("A HH:mm")}
          </p>
        </div>
      </div>
    </>
  );
}
