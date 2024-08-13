import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

type TCheckedFileItem = {
  fileName: string;
  subTitle: string;
  dateAt: Date;
};

export default function CheckedFileItem({
  fileName,
  dateAt,
  subTitle,
}: TCheckedFileItem) {
  return (
    <>
      <li className={"flex items-center justify-between p-2.5"}>
        <div className={"flex gap-2.5 text-base font-normal"}>
          <Image
            src={"./images/file_empty.svg"}
            alt={"file"}
            width={24}
            height={24}
          />
          {fileName}
        </div>
        <span className={"text-xs text-[#9E9E9E]"}>{subTitle}</span>
        <span className={"text-xs text-[#9E9E9E]"}>
          {dayjs(dateAt).toNow(true)}
        </span>
      </li>
    </>
  );
}
