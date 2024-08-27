import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnHome = nextUrl.pathname.startsWith("/");
    //   if (isOnHome) {
    //     if (isLoggedIn) return true;
    //     return false;
    //   }
    //   return true;
    // },
    redirect({ baseUrl }) {
      return baseUrl + "/";
    },
  },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
