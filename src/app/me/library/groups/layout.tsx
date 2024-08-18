export default function AiAnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"container mx-auto max-w-[1761px] pt-3"}>{children}</div>
    </>
  );
}
