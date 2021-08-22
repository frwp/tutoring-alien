import 'nextra-theme-docs/style.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/ufo.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
