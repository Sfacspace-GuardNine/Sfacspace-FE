import { addDoc, collection } from "firebase/firestore";

import { db } from "@/firebase";
import useGitContentsStore from "@/stores/useGitContentsStore";
import { VulnerabilitiesReport } from "@/type/vulnerability";
import { onDelete } from "@/utils/save2db";

const getToken = async (): Promise<string | undefined> => {
  const authBody: URLSearchParams = new URLSearchParams({
    username: process.env.NEXT_PUBLIC_LLAMA_ACCESS_USERNAME || "",
    password: process.env.NEXT_PUBLIC_LLAMA_ACCESS_PASSWORD || "",
  });

  try {
    const response = await fetch("/api/auth/token", {
      method: "POST",
      body: authBody,
    });

    if (!response.ok) {
      console.error("Authentication failed:", response.statusText);
      throw new Error("Failed to authenticate");
    }

    const authData = await response.json();

    return authData.access_token;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};

const detectVulnerabilities = async (
  code: string,
  token: string,
): Promise<string | undefined> => {
  const url: string = "/api/generate";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const generateBody = {
    user_message: `${process.env.NEXT_PUBLIC_LLAMA_SCAN_PROMPT}: ${code}`,
    temperature: 0,
    top_p: 0,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(generateBody),
    });

    if (!response.ok) {
      console.log("Request failed:", await response.text());
      return undefined;
    }

    const result: string = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.log(`Request failed due to an exception: ${error}`);
    return undefined;
  }
};

const translateJSON = async (
  json: string | undefined,
  token: string,
): Promise<string> => {
  if (!json) {
    return "error";
  }

  const url: string = "/api/generate";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const generateBody = {
    user_message: `${process.env.NEXT_PUBLIC_LLAMA_TRANSLATE_PROMPT}: ${json}`,
    temperature: 0,
    top_p: 0,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(generateBody),
    });

    if (!response.ok) {
      console.log("Request failed:", await response.text());
      return "error";
    }

    const result: string = await response.text();

    return result;
  } catch (error) {
    console.log(`Request failed due to an exception: ${error}`);
    return "error";
  }
};

export const useLamma = () => {
  const { selectedFiles, setSelectedFiles } = useGitContentsStore();

  const onScan = async (
    code: string,
    userId: string,
    repoId: string,
    fileId: string,
  ) => {
    // 파일의 상태를 "pending"으로 설정
    setSelectedFiles(
      selectedFiles.map((file) =>
        file.path === fileId
          ? { ...file, status: "analyzing", progress: 0 }
          : file,
      ),
    );

    try {
      const token: string | undefined = await getToken();
      if (!token) {
        return undefined;
      }

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId
            ? { ...file, status: "analyzing", progress: 25 }
            : file,
        ),
      );

      const vulnerabilitiesJSON: string | undefined =
        await detectVulnerabilities(code, token);

      if (!vulnerabilitiesJSON) {
        return undefined;
      }

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId
            ? { ...file, status: "analyzing", progress: 50 }
            : file,
        ),
      );

      const translatedJSON: string | undefined = await translateJSON(
        vulnerabilitiesJSON,
        token,
      );

      const json: VulnerabilitiesReport = JSON.parse(translatedJSON);

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId
            ? { ...file, status: "analyzing", progress: 75 }
            : file,
        ),
      );

      // VulnerabilitiesReport 처리 로직
      await onDelete(userId, repoId, fileId);

      await addDoc(collection(db, "vulnerabilityReport"), {
        userId: userId,
        repoId: repoId,
        fileId: fileId,
        date: new Date(),
        vulnerabilities: json.vulnerabilities,
      });

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId
            ? { ...file, status: "analyzing", progress: 90 }
            : file,
        ),
      );

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId ? { ...file, status: "completed" } : file,
        ),
      );

      return true;
    } catch (error) {
      console.error("Error adding document: ", error);

      setSelectedFiles(
        selectedFiles.map((file) =>
          file.path === fileId ? { ...file, status: "error" } : file,
        ),
      );

      return false;
    }
  };

  return { onScan };
};
