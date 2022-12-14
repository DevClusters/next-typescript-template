import '../styles/globals.css'
import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>DevClusters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
