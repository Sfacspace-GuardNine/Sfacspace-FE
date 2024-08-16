import CheckedFileItem from "@/components/CheckedFileItem";

type TCheckedFilesProps = {
  files: { fileName: string; subTitle: string; dateAt: Date }[];
};

export default function CheckedFiles({ files }: TCheckedFilesProps) {
  return (
    <>
      <ul
        className={
          "w-[590px] divide-y divide-[#BCBCBC] rounded-lg outline outline-1 outline-[#bcbcbc]"
        }
      >
        {files.map((file, index) => (
          <CheckedFileItem {...file} key={index} />
        ))}
      </ul>
    </>
  );
}
