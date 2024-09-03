import Footer from "@/components/Footer";
import { onlyLogin } from "@/libs/onlyLogin";

export default async function MeUserInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await onlyLogin();

  return (
    <>
      <div className={"container mx-auto max-w-[1314px] pb-[124px]"}>
        {children}
      </div>
      <Footer />
    </>
  );
}
