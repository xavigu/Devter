import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter App 🐷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/devter-logo.png' alt='Logo Devter'/>
          <h1> Bienvenido a Devter </h1>
          <h2>Talk about development with developers</h2>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        img {
          width: 120px;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 20px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
