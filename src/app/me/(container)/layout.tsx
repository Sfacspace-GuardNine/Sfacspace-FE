export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={"container mx-auto max-w-[1314px]"}>{children}</div>
    </>
  );
}
