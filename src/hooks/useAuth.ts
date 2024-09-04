import { useState } from "react";

import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase";
import { db } from "@/firebase";

export const useAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const token = await user.getIdToken();
      const { uid, displayName, email, photoURL } = user;

      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid,
          displayName,
          email,
          photoURL,
          createdAt: new Date().toISOString(),
        });
      }

      await fetch("/api/setCookie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      setIsLoading(false);
      router.push("/my/library");
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      setIsLoading(false);
    }
  };

  const handleLogOut = async () => {
    const isOk = confirm("로그아웃 하시겠습니까?");
    if (isOk) {
      setIsLoading(true);
      try {
        await auth.signOut();

        await fetch("/api/logout", {
          method: "POST",
        });

        setIsLoading(false);
        router.push("/login");
      } catch (error) {
        console.error("로그아웃 오류:", error);
        alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        setIsLoading(false);
      }
    }
  };

  return { handleLogin, handleLogOut, isLoading };
};
