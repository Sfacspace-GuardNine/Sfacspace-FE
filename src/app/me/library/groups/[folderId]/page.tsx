import Button from "@/components/Button";
import InfoBox from "@/components/InfoBox";
import InfoBoxDetail from "@/components/InfoBoxDetail";
import InputChip from "@/components/InputChip";
import List from "@/components/List/List";
import ProgressBar from "@/components/ProgressBar";
import TitleDefault from "@/components/TitleDefault";
import FileAnalyze from "@/components/me/FileAnalyze";
import ResultAnalyze from "@/components/me/ResultAnalyze";

export default function AiAnalyzePage() {
  return (
    <>
      <div className={"flex flex-col gap-[45px]"}>
        <TitleDefault link={"/me/library"}>example</TitleDefault>

        <div className={"flex gap-7"}>
          <Button className={"h-[107px] w-[247px]"}>폴더 전체 검사</Button>
          <div
            className={
              "flex w-full flex-col justify-center gap-5 rounded-lg p-5 outline outline-1 outline-primary-100"
            }
          >
            <div className={"flex gap-7"}>
              <InputChip text={".eslintrc.json"} variant={"light"} />
              <InputChip
                text={".eslintrc.json"}
                variant={"light"}
                progress={"0"}
              />
              <InputChip
                text={".eslintrc.json"}
                variant={"light"}
                progress={"0"}
              />
              <InputChip
                text={".eslintrc.json"}
                variant={"light"}
                progress={"0"}
              />
            </div>
            <ProgressBar value={50} />
          </div>
        </div>

        <div className={"flex gap-7 pb-[125px]"}>
          <aside className={"flex w-[247px] flex-col gap-6"}>
            <InfoBox error={12} success={8} warning={23} />
            <List
              items={[
                { type: "folder", name: "public" },
                { type: "folder", name: "src" },
                { type: "file", name: ".eslintrc.json", status: "completed" },
                { type: "file", name: ".eslintrc.json", status: "error" },
                { type: "file", name: ".eslintrc.json", status: "analyzing" },
                { type: "file", name: ".eslintrc.json", status: "pending" },
                { type: "file", name: ".eslintrc.json", isChecked: true },
                { type: "file", name: ".eslintrc.json" },
              ]}
            />
            <Button size={"sm"}>검사하기</Button>
          </aside>
          <section className={"w-full"}>
            {/* 코드 분석 영역 */}
            <div className={"mb-[60px] flex gap-7"}>
              <FileAnalyze code={""} />
              <ResultAnalyze code={""} state={"result"} />
            </div>

            {/* 수정된 코드 영역 */}
            <div className={"flex flex-col gap-7"}>
              <p className={"text-2xl font-bold"}>수정된 코드</p>
              <InfoBoxDetail
                variant={"red"}
                title={"color:#333;"}
                text={[
                  "컬러 코드를 설정할때 이렇게 하게 되면 이런 오류가 생기기때문에 이렇게 하지 않는게 좋다.",
                ]}
              />
              <InfoBoxDetail
                variant={"red"}
                title={'import { Badge } from "@/components/ui/badge";'}
                text={[
                  "컬러 코드를 설정할때 이렇게 하게 되면 이런 오류가 생기기때문에 이렇게 하지 않는게 좋다.",
                ]}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
