import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const onlyNotLogin = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
};
