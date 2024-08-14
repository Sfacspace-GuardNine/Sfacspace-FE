import { cn } from "@/utils/cn";

type TInfoBoxDetailItemProps = {
  text: string; // text를 string으로 변경
  variant?: "red" | "primary" | "gray";
};

function InfoBoxDetailItem({
  text,
  variant = "primary",
}: TInfoBoxDetailItemProps) {
  const textClass = cn(
    "pt-[10px] text-[18px] leading-[22px]",
    variant === "gray" ? "text-[#969696]" : "text-[#3F3F3F]",
  );

  return <li className={textClass}>{text}</li>;
}

export default InfoBoxDetailItem;
