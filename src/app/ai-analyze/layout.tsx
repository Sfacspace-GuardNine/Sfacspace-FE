import Footer from "@/components/Footer";

export default function AiAnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"p-3"}>{children}</div>
      <Footer />
    </>
  );
}
