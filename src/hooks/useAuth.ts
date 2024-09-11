import { useState } from "react";

import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase";
import { db } from "@/firebase";
import useGitRepoStore from "@/stores/useGitRepoStore";
import { handleLogOutDB } from "@/utils/save2db";

export const useAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setGitToken } = useGitRepoStore();

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

      const credential = GithubAuthProvider.credentialFromResult(result);
      const gitToken = credential?.accessToken;
      if (gitToken) {
        setGitToken(gitToken);
      }

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid,
          displayName,
          email,
          photoURL,
          createdAt: new Date().toISOString(),
          isEmailConsent: false,
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
    setIsLoading(true);
    try {
      const user = auth.currentUser; // 현재 로그인한 사용자 가져오기
      const uid = user?.uid; // 사용자 ID 가져오기

      await auth.signOut();

      await fetch("/api/logout", {
        method: "POST",
      });

      if (uid) {
        handleLogOutDB(uid); // 로그아웃 시 사용자 ID 전달
      }

      setIsLoading(false);

      router.push("/login");
    } catch (error) {
      console.error("로그아웃 오류:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      setIsLoading(false);
    }
  };

  return { handleLogin, handleLogOut, isLoading };
};
