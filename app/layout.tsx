import "/styles/tailwindcss.css";
import "/styles/globals.css";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import MobileHeader from "../components/home/mobile-header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blisgo",
  description: "분리수거를 바르게, 블리스고입니다",
  robots: "https://blisgo-website.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://blisgo-website.vercel.app/",
    title: "blisgo",
    siteName: "blisgo",
    images: [
      {
        url: "https://blisgo-website.vercel.app/assets/footer-img-logo.svg",
        width: 285,
        height: 167,
        alt: "blisgo icon",
      },
    ],
  },
};
// ref) https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// ref) https://velog.io/@henrynoowah/Next.js-v13.2-Feature-Metadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <hr className="border-none bg-lightgrey-2 h-[1px]" />
        <div className="flex-1">{children}</div>
        <Footer />
        <div className="md:hidden block h-[56px] bg-lightgrey-1">
          <MobileHeader />
        </div>
      </body>
    </html>
  );
}
