"use client";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useParams } from "next/navigation";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import InfoBoxDetail from "@/components/InfoBoxDetail";
import List from "@/components/List/List";
import NewInfoBox from "@/components/NewInfoBox";
import TitleDefault from "@/components/TitleDefault";
import FileAnalyze from "@/components/my/FileAnalyze";
import { auth } from "@/firebase";
import { useLamma } from "@/hooks/useLamma";
import useGitContentsStore, {
  TRepoContentItem,
  Tstatus,
} from "@/stores/useGitContentsStore";
import useGitRepoStore from "@/stores/useGitRepoStore";
import { Vulnerability } from "@/type/vulnerability";
import { onFile } from "@/utils/save2db";

export default function AiAnalyzePage() {
  const { owner, name } = useParams();
  const { onScan } = useLamma();

  const repoOwner = Array.isArray(owner) ? owner[0] : owner;
  const repoName = Array.isArray(name) ? name[0] : name;
  const [curentCode, setCurrentCode] = useState<string | null>(null);
  const [currentFile, setCurrentFile] = useState<TRepoContentItem>();
  const [currentStatus, setCurrentStatus] = useState<Tstatus>();
  const [uid, setUid] = useState<string | null>(null);
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);

  const {
    selectedFiles,
    fetchRepoContents,
    setRepoContents,
    fetchFileContent,
  } = useGitContentsStore();
  const { gitToken } = useGitRepoStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchContents = async () => {
      if (repoOwner && repoName && gitToken) {
        const contents = await fetchRepoContents({
          token: gitToken,
          owner: repoOwner,
          repo: repoName,
        });

        setRepoContents(contents);
      }
    };

    fetchContents();
  }, [repoOwner, repoName, gitToken, fetchRepoContents, setRepoContents]);

  useEffect(() => {
    if (!currentFile) return;

    const fileDetails = selectedFiles.find(
      (file) => file.path === currentFile.path,
    );

    //현재 파일의 상태 관리
    if (fileDetails?.status) setCurrentStatus(fileDetails.status);
    console.log(currentStatus);
    const fetchContent = async () => {
      try {
        const content = await fetchFileContent(currentFile.download_url);
        if (content) {
          setCurrentCode(content);
        }
      } catch (error) {
        console.error(error);
      }
    };

    //현재 파일의 코드 관리
    fetchContent();

    const fetchVulnerabilities = async () => {
      if (uid) {
        try {
          const fetchedVulnerabilities = await onFile(
            uid,
            repoName,
            currentFile.path,
          );
          console.log("펫취", fetchedVulnerabilities);
          if (!fetchedVulnerabilities) {
            return;
          }
          setVulnerabilities(fetchedVulnerabilities);
        } catch (error) {
          console.error("Error fetching vulnerabilities:", error);
        }
      }
    };

    fetchVulnerabilities();
  }, [
    currentFile,
    selectedFiles,
    fetchFileContent,
    currentStatus,
    uid,
    repoName,
  ]);

  // 검사하기 버튼 클릭 핸들러
  const handleScan = async () => {
    if (!selectedFiles || selectedFiles.length === 0) return;
    console.log("검사하기", selectedFiles);

    for (const file of selectedFiles) {
      const code = await fetchFileContent(file.download_url); // 코드 가져오기
      const userId = uid; // 사용자 ID 설정
      const repoId = repoName; // 리포지토리 이름을 repoId로 사용
      const fileId = file.path; // 파일 경로를 fileId로 사용

      if (typeof code === "string" && userId) {
        try {
          const isSaved = await onScan(code, userId, repoId, fileId); // onScan 함수 호출
          console.log(`Result for file ${file.path}:`, isSaved); // 결과를 콘솔에 출력
        } catch (error) {
          console.error(`Error scanning file ${file.path}:`, error);
        }
      } else {
        console.error(
          `Invalid code for file ${file.path}. Expected a string but got ${typeof code}.`,
        );
      }
    }
  };

  return (
    <div className={"flex flex-col gap-[45px]"}>
      <TitleDefault link={"/my/library"}>example</TitleDefault>

      <div className="flex w-full gap-7">
        <div className={"flex flex-col gap-7"}>
          <Button className={"h-[107px] w-[247px]"}>폴더 전체 검사</Button>
          <aside className={"flex w-[247px] flex-col gap-6"}>
            <NewInfoBox />
            <List setCurrentFile={setCurrentFile} />
            <Button size={"sm"} onClick={handleScan}>
              검사하기
            </Button>
          </aside>
        </div>

        <div className={"flex flex-1 pb-[125px]"}>
          <section className={"w-full"}>
            {/* 코드 분석 영역 */}
            <div className={"relative mb-[60px] flex gap-7"}>
              <Alert
                title={currentStatus || "없음"}
                line="2"
                text1="순차적으로 파일 검사가 진행됩니다."
                text2="다시 시도해주세요."
                variant="error"
                isShow={true}
                buttonChild="다시 시도하기"
                className="absolute right-[12px] top-[13px]"
              />
              <FileAnalyze code={curentCode} />
            </div>

            {/* 수정된 코드 영역 */}
            <div className={"flex flex-col gap-7"}>
              {vulnerabilities.map((vulnerability, index) => (
                <InfoBoxDetail
                  key={index}
                  variant={"red"}
                  title={vulnerability.title}
                  weakness={vulnerability.reason}
                  text={vulnerability.fix}
                  codeDetail={vulnerability.new_code}
                  lang=""
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
