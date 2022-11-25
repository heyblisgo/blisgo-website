import "/styles/tailwindcss.css";
import "/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import MobileHeader from "../components/mobile-header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Blisgo</title>
      </Head>
      <div className="xl:mx-auto xl:w-[1280px]">
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
        <div className="md:hidden block h-[56px]">
          <MobileHeader />
        </div>
      </div>
    </>
  );
};

export default App;
