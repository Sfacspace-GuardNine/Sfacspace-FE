import React from "react";

export default function MyLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"container mx-auto"}>{children}</div>
    </>
  );
}
