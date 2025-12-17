import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hacketweet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hacketweet description" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
