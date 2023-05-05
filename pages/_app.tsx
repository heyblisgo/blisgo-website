import "/styles/tailwindcss.css";
import "/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import Head from "next/head";
import MobileHeader from "../components/home/mobile-header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Blisgo</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <div className="md:hidden block h-[56px] bg-lightgrey-1">
        <MobileHeader />
      </div>
    </>
  );
};

export default App;
