import { ReactNode } from "react";

import Link from "next/link";

import Button from "./Button";

function BlurPopup({ children }: { children: ReactNode }) {
  return (
    <div className="absolute z-50 h-full w-full backdrop-blur-sm">
      <div className="z-100 absolute left-60 top-8 flex items-center justify-center">
        <div className="flex min-w-[340px] flex-col items-center justify-center gap-[24px] rounded-[20px] bg-white p-[32px] font-medium shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
          {children}

          <div className="flex gap-[12px]">
            <Link href="/login">
              <Button
                shape="round"
                variant="outline"
                size="sm"
                className="border-[2px]"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlurPopup;
