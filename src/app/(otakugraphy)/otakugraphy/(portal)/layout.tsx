import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { CSSProperties } from "react";
import ReactLenis, { Lenis } from "lenis/react";
import "lenis/dist/lenis.css";

import ".././globals.scss";

import Script from "next/script";

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
        <Script src="https://unpkg.com/lenis@v1.0.1/lenis.min.js" />
        <ReactLenis options={{ autoRaf: true }} root>
          <div id="top"></div>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
