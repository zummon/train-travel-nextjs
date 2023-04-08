import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { title, thumbnail, excerpt, date } = pageProps;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="date" content={date} />
        <meta name="description" content={excerpt} />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:description" content={excerpt} />
        <meta property="og:image" content={thumbnail.src} />
        <meta name="twitter:image" content={thumbnail.src} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
