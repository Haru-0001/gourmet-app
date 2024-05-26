import type { Metadata } from "next";
import "./globals.css";
import { Yusei_Magic } from "next/font/google";

//フォントの設定
const ymFont = Yusei_Magic({
  preload: false,
  variable: "--font-yusei-magic",
  weight: "400"
});

//メタデータの設定
export const metadata: Metadata = {
  title: "今日のごはんナビ",
  description: "周囲のレストランをワンタッチ検索",
};

//レイアウトの設定
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>){
  return (
    <html lang="ja">
      <body className={`${ymFont.className}`}>
        {children}
      </body>
    </html>
  );
}
