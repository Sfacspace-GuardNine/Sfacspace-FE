"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import InfoBoxDetail from "@/components/InfoBoxDetail";
import List from "@/components/List/List";
import NewInfoBox from "@/components/NewInfoBox";
import TitleDefault from "@/components/TitleDefault";
import FileAnalyze from "@/components/my/FileAnalyze";
import useGitContentsStore, {
  TRepoContentItem,
  Tstatus,
} from "@/stores/useGitContentsStore";
import useGitRepoStore from "@/stores/useGitRepoStore";

export default function AiAnalyzePage() {
  const { owner, name } = useParams();
  const repoOwner = Array.isArray(owner) ? owner[0] : owner;
  const repoName = Array.isArray(name) ? name[0] : name;
  const [curentCode, setCurrentCode] = useState<string | null>(null);
  const [currentFile, setCurrentFile] = useState<TRepoContentItem>();
  const [currentStatus, setCurrentStatus] = useState<Tstatus>();

  const {
    selectedFiles,
    fetchRepoContents,
    setRepoContents,
    fetchFileContent,
  } = useGitContentsStore();
  const { gitToken } = useGitRepoStore();

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
  }, [currentFile, selectedFiles, fetchFileContent]);

  return (
    <div className={"flex flex-col gap-[45px]"}>
      <TitleDefault link={"/my/library"}>example</TitleDefault>

      <div className="flex w-full gap-7">
        <div className={"flex flex-col gap-7"}>
          <Button className={"h-[107px] w-[247px]"}>폴더 전체 검사</Button>
          <aside className={"flex w-[247px] flex-col gap-6"}>
            <NewInfoBox />
            <List setCurrentFile={setCurrentFile} />
            <Button size={"sm"}>검사하기</Button>
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
              <InfoBoxDetail
                variant={"red"}
                title={"XSS (Cross-Site Scripting) Vulnerablility"}
                weakness="사용자 입력을 HTML에 직접 삽입하면서 HTML을 안전하게 처리하지 않음"
                text="사용자 입력을 HTML에 삽입하기 전에 반드시 적절한 인코딩을 수행하거나, DOM API를 사용해 안전하게 요소를 삽입해야함. 'innerHTML'은 입력된 HTML 코드를 그대로 렌더링하기 떄문에 악성 스크립트를 실행할 수 있음. 'textContent'는 HTML을 해석하지 않고 텍스트로만 처리하기 때문에 안전함."
                codeDetail={[
                  "function displayUserInput(input) {",
                  "document.getElementById('userInput').textContent = input; // textContent를 사용해 XSS 예방",
                  "}",
                ]}
              />
              <InfoBoxDetail
                variant={"red"}
                title={"Insecure Password Handling"}
                weakness="비밀번호를 'localStorage'에 평문으로 저장함."
                text="비밀번호는 브라우저의 메모리에서만 유지되도록 하고, 저장이 필요한 경우에는 안전한 해시 알고리츰을 사용해 해시값만 저장. 'localStorage'는 자바스크립트를 통해 쉽게 접근할 수 있어, 악정 스크립트에 의해 유출될 수 있음. 비밀번호를 해시하여 저장하면 공격자가 해시값을 얻더라도 원래 비밀번호를 알아내기 어려움."
                codeDetail={[
                  "function storePassword(password) {",
                  "const hashedPassword = hashFunction(password); // 안전한 해시 함수 사용",
                  "localStorage.setItem('passwordHash', hashedPassword);",
                  "}",
                ]}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
