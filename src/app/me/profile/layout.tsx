export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"pb-[124px] pt-[72px]"}>{children}</div>
    </>
  );
}
