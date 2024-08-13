import CheckedFileItem from "@/components/CheckedFileItem";

type TCheckedFiles = {
  files: { fileName: string; subTitle: string; dateAt: Date }[];
};

export default function CheckedFiles({ files }: TCheckedFiles) {
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
