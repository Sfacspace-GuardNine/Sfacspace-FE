import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Chatbot from "@/components/Chatbot/Chatbot";
import Gnb from "@/components/Gnb";
import { cn } from "@/utils/cn";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(inter.className, pretendard.variable, "select-none")}>
        <Gnb />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
