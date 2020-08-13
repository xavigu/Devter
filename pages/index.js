import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/Icons/Github'

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
          <div>
            <Button>
               <GitHub fill='#fff' width={20} height={20}/> Login with Github
            </Button>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        div {
          padding: 12px 0;
        }
        img {
          width: 120px;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 20px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
