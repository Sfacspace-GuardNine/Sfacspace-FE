import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const onlyLogin = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
};
