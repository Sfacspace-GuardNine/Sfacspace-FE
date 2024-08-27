"use server";

import { signIn, signOut } from "@/auth";

export async function logout() {
  await signOut();
}

export async function githubLogin() {
  await signIn("github");
}
