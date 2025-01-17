import Footer from "@/components/Footer";

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={"pb-[124px]"}>{children}</div>
      <Footer />
    </>
  );
}
