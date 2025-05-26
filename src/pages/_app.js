import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vipul- Personal Dashboard</title>
        <link rel="icon" href="/image.png" />
        <meta name="description" content="Personal dashboard of Vipul Mehra, showcasing academic and professional details." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}