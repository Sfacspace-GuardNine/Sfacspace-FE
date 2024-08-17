export default function AiAnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"max-w-[1761px] pt-3"}>{children}</div>
    </>
  );
}
