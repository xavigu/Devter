import Head from 'next/head'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter App 🐷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
          <h1>
            Bienvenido a <a href="https://nextjs.org">Devter</a>
          </h1>
      </AppLayout>
    </>
  )
}
