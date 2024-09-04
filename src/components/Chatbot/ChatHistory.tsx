import Image from "next/image";

import ChatText from "@/components/Chatbot/ChatText";

const DUMMY_DATA = [
  {
    isUser: false,
    time: new Date(),
    text: `<b>[취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD</b>의
            보고서에서 모르는게 생겼나요? 
            
            보고서에서 궁금한 점을 물어봐주세요!`,
  },
  {
    isUser: true,
    time: new Date(),
    text: `번역이 좀 잘못된 것 같아요. 이해하기 어려워요.`,
  },
];

export default function ChatHistory() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={
          "flex h-[80vh] max-h-[726px] w-[558px] flex-col justify-between rounded-3xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]"
        }
      >
        <div
          className={
            "flex items-center gap-[10px] rounded-t-3xl bg-primary-500 p-6 text-white"
          }
        >
          <Image
            src={"/icons/chat-icon.svg"}
            alt={"chat"}
            width={34}
            height={34}
          />
          <p className={"text-xl font-semibold"}>플로디텍터 운영자</p>
        </div>
        <div className={"flex h-full flex-col gap-6 px-5 py-6"}>
          {DUMMY_DATA.map((data, index) => (
            <ChatText time={data.time} isUser={data.isUser} key={index}>
              {data.text}
            </ChatText>
          ))}
        </div>
        <div
          className={"w-full border border-transparent border-t-[#EEEFEF] p-5"}
        >
          <form
            className={
              "flex items-center gap-[10px] rounded-[41px] bg-[#F8F8F9] px-4 py-3"
            }
            onSubmit={handleSubmit}
          >
            <input
              placeholder={"챗봇에게 궁금한 점을 물어보세요!"}
              className={"h-7 w-full bg-transparent focus:outline-none"}
            />
            <button
              className={"rounded-[34px] bg-primary-500 px-[14px] py-[10px]"}
            >
              <Image
                src={"/icons/chat-up.svg"}
                alt={"enter"}
                width={13.74}
                height={16.48}
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
