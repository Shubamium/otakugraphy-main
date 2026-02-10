import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto_Slab } from "next/font/google";
import { BIZ_UDPGothic } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import MediaDetail from "./components/mediaDetail/MediaDetail";
import Scroll from "./Scroll";
import ReactLenis, { Lenis } from "lenis/react";
import "lenis/dist/lenis.css";
import Footer from "./components/footer/Footer";
import SideContact from "./components/sideContact/SideContact";
import Script from "next/script";
import EXIF from "exif-js";
import PasswordGate from "./components/passwordGate/PasswordGate";
import HeaderData from "./components/header/HeaderData";
const noto = Noto_Sans_JP({
  variable: "--fontM",
  subsets: ["latin"],
});
const biz = BIZ_UDPGothic({
  variable: "--fontM",
  subsets: ["latin"],
  weight: ["400", "700"],
});
// const zen = Zen_Kaku_Gothic_New({
//   variable: "--fontM",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });
const roboto = Roboto_Slab({
  variable: "--fontM",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const title = "Otakugraphy - VTuber-Focused Media Company";
const description =
  " Raising the industry standard for immersive multimedia experiences through connecting virtual creators and their communities ";
const banner = "https://shubastore.venmiart.com/api/public/dl/f-AgfGlA";
const url = "https://otakugraphy.com";

const keywords = [
  "Professional anime photographers",
  "Otaku coverage",
  "Otaku convention",
  "VTuber event videographers",
  "VTuber Coverage",
  "VTuber IRL",
  "Convention coverage team",
  "Anime Convention",
  "Photography",
  "Videography",
  "VTuber Content Creation",
  "Anime Brand Marketing",
  "Event Coverage",
  "Panels",
  "Nightlife",
  "Live Stream Production",
  "Behind-the-Scenes Documentation",
  "Energetic",
  "Authentic",
  "Cinematic",
  "Candid",
  "Neon-Otaku",
  "Kawaii Aesthetic",
];

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),
  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  icons: ["./favicon.ico"],

  keywords: keywords,
  description: description,
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
            "--fontO": roboto.style.fontFamily,
            "--fontM": roboto.style.fontFamily,
          } as CSSProperties
        }
      >
        <PasswordGate>
          <ReactLenis options={{ autoRaf: true }} root>
            <div id="top"></div>
            <SideContact />
            {children}
            <HeaderData />
            <MediaDetail />
            <Footer />
          </ReactLenis>
        </PasswordGate>
      </body>
    </html>
  );
}
