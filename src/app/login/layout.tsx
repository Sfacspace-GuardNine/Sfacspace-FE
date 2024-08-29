import { onlyNotLogin } from "@/libs/onlyNotLogin";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await onlyNotLogin();
  return <>{children}</>;
}
