import "/styles/tailwindcss.css";
import "/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import Head from "next/head";
import MobileHeader from "../components/home/mobile-header";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "blisgo",
  description: "분리수거를 바르게, 블리스고입니다",
  canonical: "https://blisgo-website.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://blisgo-website.vercel.app/",
    title: "blisgo",
    site_name: "blisgo",
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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <title>Blisgo</title>
      </Head>
      <Header />
      <hr className="border-none bg-lightgrey-2 h-[1px]" />
      <Component {...pageProps} />
      <Footer />
      <div className="md:hidden block h-[56px] bg-lightgrey-1">
        <MobileHeader />
      </div>
    </>
  );
};

export default App;
