"use client";

import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import Switch from "@/components/Switch";
import UserProfileHeader from "@/components/my/UserProfileHeader";
import { auth, db } from "@/firebase";

export default function SettingPage() {
  const [isEmailConsent, setIsEmailConsent] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchUserData = async (userId: string) => {
    const userRef = doc(db, "users", userId);

    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setIsEmailConsent(userData?.emailConsent ?? false);
      }
    } catch (e) {
      console.error("사용자 정보를 불러올리올 수 없습니다.: ", e);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
        fetchUserData(uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSwitchChange = async () => {
    if (!userId) return;

    const isNewConsentState = !isEmailConsent;
    setIsEmailConsent(isNewConsentState);

    const userRef = doc(db, "users", userId);
    try {
      await updateDoc(userRef, {
        emailConsent: isNewConsentState,
      });
    } catch (e) {
      console.error("업데이트에 실패했습니다.", e);
    }
  };

  return (
    <>
      <UserProfileHeader />
      <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />
      <div className={"text-[#3F3F3F]"}>
        {/* 계정 유형 */}
        <div className={"flex items-center gap-8"}>
          <span className={"text-[32px] font-semibold"}>계정 유형</span>
          <span className={"font-medium] text-[24px]"}>깃허브 연동</span>
        </div>
        <hr className={"my-[80px] h-[1px] border-0 bg-[#BABABA]"} />

        {/* 알림 */}
        <p className={"pb-12 text-[32px] font-semibold"}>알림</p>
        <div className={"flex items-center justify-between"}>
          <span className={"font-medium] text-[24px]"}>이메일로 알림 받기</span>
          <Switch checked={isEmailConsent} onChange={handleSwitchChange} />
        </div>
      </div>
    </>
  );
}
