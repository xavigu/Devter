import { useEffect, useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/Github'
import { colors } from '../styles/theme'
import { loginWithGithub, onAuthStateChanged } from '../firebase/client'

export default function Home () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGithub()
      .then(user => {
        console.log('user logged:', user)
        setUser(user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Head>
        <title>Devter App 🐷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/devter-logo.png' alt='Logo Devter'/>
          <h1> Welcome to Devter
            { user && user.avatar &&
                <>
                  <br/>
                  <strong>{user.username}</strong>
                </>
            }
          </h1>
          <h2>Talk about development with developers</h2>
          <div>
            {
              !user &&
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={20} height={20}/> Login with Github
                </Button>
            }
            {
              user && user.avatar &&
                <img src = {user.avatar} />
            }
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
