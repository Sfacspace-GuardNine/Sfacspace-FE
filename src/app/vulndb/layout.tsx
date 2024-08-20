import Footer from "@/components/Footer";

export default function VulnDBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"pb-[30px]"}>{children}</div>
      <Footer />
    </>
  );
}
