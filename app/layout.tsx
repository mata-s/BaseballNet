import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Shell } from "../components/Shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    // 32〜36文字前後：PC / SP 両対応
    default: "草野球の成績管理・記録ができるアプリ｜ベースボールネット",
    template: "%s｜ベースボールネット",
  },
  description:
    // 90〜120文字前後：検索結果で全文表示されやすい
    "ベースボールネットは、草野球の個人成績・チーム成績をかんたんに記録・管理できるアプリです。ランキングや分析で試合の振り返りがもっと楽しくなります。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}