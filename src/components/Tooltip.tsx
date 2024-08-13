import { ReactNode } from "react";

export default function Tooltip({ children }: { children: ReactNode }) {
  return (
    <>
      <span
        className={
          "rounded-lg bg-background-purpleLight p-[10px] text-base font-medium shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]"
        }
      >
        {children}
      </span>
    </>
  );
}
