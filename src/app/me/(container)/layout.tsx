import React from "react";

import MyLibraryBackButton from "@/components/me/MyLibraryBackButton";

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={"container mx-auto max-w-[1314px]"}>
        <MyLibraryBackButton />
        {children}
      </div>
    </>
  );
}
