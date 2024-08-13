import { ReactNode } from "react";

type TLabelProps = {
  children: ReactNode;
  variant: keyof typeof LabelColor;
};

const LabelColor = {
  red: { bg: "#FFEAE4", text: "#FF3D00" },
  blue: { bg: "#E4F2FF", text: "#4C93FF" },
  green: { bg: "#DDFFF3", text: "#00987C" },
  purple: { bg: "#F5E4FF", text: "#A54CFF" },
  pink: { bg: "#FFF2F7", text: "#FF81A7" },
  yellow: { bg: "#FFFBE4", text: "#FF8A00" },
} as const;

export default function Label({
  children,
  variant = "purple",
  ...rest
}: TLabelProps) {
  return (
    <>
      <div
        className={
          "w-fit rounded-full px-3 py-3 text-center text-xl font-medium outline outline-1"
        }
        style={{
          backgroundColor: LabelColor[variant].bg,
          color: LabelColor[variant].text,
          outlineColor: LabelColor[variant].text,
        }}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}
