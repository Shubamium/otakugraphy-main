import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { BIZ_UDPGothic } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import MediaDetail from "./components/mediaDetail/MediaDetail";
import Scroll from "./Scroll";
import ReactLenis, { Lenis } from "lenis/react";
import "lenis/dist/lenis.css";
const noto = Noto_Sans_JP({
  variable: "--fontM",
  subsets: ["latin"],
});
const biz = BIZ_UDPGothic({
  variable: "--fontM",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const zen = Zen_Kaku_Gothic_New({
  variable: "--fontM",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Otakugraphy",
  description: "aaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body`}
        style={
          {
            "--fontO": zen.style.fontFamily,
            "--fontM": noto.style.fontFamily,
          } as CSSProperties
        }
      >
        <ReactLenis options={{ autoRaf: true }} root>
          {children}
          <Header />
          <MediaDetail />
        </ReactLenis>
      </body>
    </html>
  );
}
