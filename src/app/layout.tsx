import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from 'next/font/google'

const nsJpFont = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});


export const metadata: Metadata = {
  title: "今日のごはんナビ",
  description: "周囲のレストランをワンタッチ検索",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={nsJpFont.className}>
        {children}
      </body>
    </html>
  );
}
