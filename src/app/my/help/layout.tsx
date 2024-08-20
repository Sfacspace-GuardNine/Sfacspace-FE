import React from "react";

import Footer from "@/components/Footer";
import MyLibraryBackButton from "@/components/my/MyLibraryBackButton";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"container mx-auto max-w-[1538px] pb-[124px]"}>
        <MyLibraryBackButton />
        {children}
      </div>
      <Footer />
    </>
  );
}
