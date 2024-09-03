import Footer from "@/components/Footer";
import { onlyLogin } from "@/libs/onlyLogin";

export default async function MeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await onlyLogin();
  return (
    <>
      <div className={"pb-[124px]"}>{children}</div>
      <Footer />
    </>
  );
}
