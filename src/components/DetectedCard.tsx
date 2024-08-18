import AssistChip from "@/components/AssistChip";
import ThreeDotDropDown from "@/components/ThreeDotDropDown";
import { cn } from "@/utils/cn";

type TDetectedCardProps = {
  label: string;
  fileName: string;
} & React.ComponentProps<"div">;

export default function DetectedCard({
  label,
  fileName,
  className,
  ...rest
}: TDetectedCardProps) {
  return (
    <>
      <div
        className={cn(
          "flex h-[200px] cursor-pointer flex-col justify-between rounded-xl p-5 outline outline-1 outline-primary-100 hover:bg-primary-50",
          className,
        )}
        {...rest}
      >
        <div className={"flex justify-between"}>
          <AssistChip text={label} variant={"outline"} />
          <ThreeDotDropDown />
        </div>
        <div className={"flex flex-col gap-[10px]"}>
          <p className={"text-[28px] font-medium text-[#3F3F3F]"}>00.00.00</p>
          <p className={"text-[16px] text-[#969696]"}>{fileName}</p>
        </div>
      </div>
    </>
  );
}
