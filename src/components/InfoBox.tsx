import Image from "next/image";

type TInfoboxProps = {
  error?: number;
  warning?: number;
  success?: number;
};

export default function InfoBox({
  error = 0,
  warning = 0,
  success = 0,
}: TInfoboxProps) {
  return (
    <>
      <div
        className={
          "flex h-[65px] gap-5 rounded-lg p-5 text-xl font-medium text-[#3f3f3f] outline outline-1 outline-[#C3C3C3]"
        }
      >
        <div className={"flex items-center gap-2"}>
          <Image
            src={"/images/info_error.svg"}
            alt={"error"}
            width={18}
            height={18}
          />
          {error}
        </div>
        <div className={"flex items-center gap-2"}>
          <Image
            src={"/images/info_warning.svg"}
            alt={"warning"}
            width={23}
            height={20}
          />
          {warning}
        </div>
        <div className={"flex items-center gap-2"}>
          <Image
            src={"/images/info_success.svg"}
            alt={"warning"}
            width={22}
            height={22}
          />
          {success}
        </div>
      </div>
    </>
  );
}
