import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const getSession = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const session = await auth(token);

  return session;
};
