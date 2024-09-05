"use client";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { auth, db } from "@/firebase";

export default function HelpPage() {
  const [content, setContent] = useState({
    name: "",
    message: "",
  });
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
        setUserEmail(currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
    console.dir(content);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "inquiries"), {
        name: content.name,
        message: content.message,
        createAt: Timestamp.now(),
        email: userEmail,
        userId: userId,
      });
      alert("등록에 성공했습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={"flex h-fit gap-[124px]"}>
        <aside className={"flex min-w-[430px] flex-col justify-between"}>
          <div className={"flex flex-col gap-[30px]"}>
            <p
              className={
                "text-[60px] font-bold tracking-[-0.07em] text-primary-500"
              }
            >
              서비스이용에 <br />
              문제가 생겼나요?
            </p>
            <span
              className={"text-xl font-medium tracking-tighter text-[#969696]"}
            >
              이용하면서 문제가 생겼다면 언제든지 문의주세요. <br />
              서비스 개발과 성장에 큰 도움이 됩니다.
            </span>
          </div>
          <div className={"flex flex-col gap-[51px]"}>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-xl font-semibold text-[#3F3F3F]"}>Email</p>
              <span className={"text-lg text-[#969696]"}>
                justin@floatfactory.kr
              </span>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-xl font-semibold text-[#3F3F3F]"}>Address</p>
              <span className={"text-lg text-[#969696]"}>
                서울 강서구 마곡중앙2로 11 305호
              </span>
            </div>
          </div>
        </aside>

        <main
          className={
            "flex w-full flex-col justify-between gap-8 rounded-[40px] border border-primary-500 p-[60px]"
          }
        >
          <form
            onSubmit={onSubmitHandler}
            className={"flex flex-col gap-[23px]"}
          >
            <div className={"flex flex-col gap-[23px]"}>
              <p className={"text-2xl font-bold"}>문의하기</p>
              <span className={"text-[#8F8F8F]"}>
                문의하고싶은 내용을 구체적으로 작성해주셔야 피드백이 정상적으로
                반영됩니다.
              </span>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-lg font-medium"}>Name</p>
              <Input
                placeholder={"이름을 적어주세요."}
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-lg font-medium"}>Email</p>
              <Input
                placeholder={"email"}
                value={userEmail || "email"}
                disabled
              />
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-lg font-medium"}>Message</p>
              <textarea
                placeholder={"내용을 적어주세요."}
                className={
                  "min-h-[226px] w-full rounded-lg border border-neutral-10 p-3 focus:outline focus:outline-1 focus:outline-primary-500"
                }
                name="message"
                required
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className={"text-lg font-semibold"}>
              문의 보내기
            </Button>
          </form>
        </main>
      </div>
    </>
  );
}
