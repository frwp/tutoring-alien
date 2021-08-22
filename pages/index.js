import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tutoring Alien</title>
        <meta name='description' content='Belajar dasar web dan wordpress' />
        <link rel='icon' href='/ufo.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tutoring Alien 👽</h1>

        <p className={styles.description}>
          Di sini kita akan belajar teknologi web dan cara membuat blog
          sederhana menggunakan Wordpress!{' '}
          <Link href='/web/introduction'>Get started 👋</Link>
        </p>

        <div className={styles.grid}>
          <a href='/web/introduction' className={styles.card}>
            <h2>💻 Dasar Web &rarr;</h2>
            <p>
              Perkenalan dahulu dengan teknologi web yang membuat internet
              berwarna.
            </p>
          </a>

          <a href='/wordpress/whatis' className={styles.card}>
            <h2>🌏 Langsung Wordpress &rarr;</h2>
            <p>Langsung menuju perkenalan Wordpress dan cara membuatnya!</p>
          </a>
        </div>
        <div>
          Icons made by{' '}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
        <p>
          <a
            href='https://www.youtube.com/channel/UCh8q2tsLW1YS8XSFczx9MTg'
            target='_blank'
            rel='noreferrer'
          >
            <span>
              <FontAwesomeIcon
                icon={faYoutube}
                width={24}
                height={24}
                color='red'
              />
            </span>
            KKN-PPM UGM Bersama Ayah 2021
          </a>
          <div style={{ textAlign: 'center' }}>
            <a style={{ textDecorationLine: 'none', color: 'black' }}>
              <span>
                <FontAwesomeIcon icon={faInstagram} width={24} color='purple' />
              </span>
              @bersama_ayah
            </a>
          </div>
        </p>
      </footer>
    </div>
  );
}
