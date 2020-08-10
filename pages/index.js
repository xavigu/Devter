import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter App 🐷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <nav className={styles.nav}>
            <Link href='/timeline'>
              Timeline
            </Link>
        </nav>

      </main>
    </div>
  )
}
