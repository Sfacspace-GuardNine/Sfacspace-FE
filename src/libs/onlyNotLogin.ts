import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const onlyNotLogin = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (token) {
    const session = await auth(token);
    if (session) {
      redirect("/");
    }
  }
};
