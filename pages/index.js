import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import AppLayout from "components/AppLayout";
import Avatar from "components/Avatar";
import Button from "components/Button";
import GitHub from "components/Icons/Github";
import Logo from "components/Icons/Logo";

import { colors } from "styles/theme";
import { loginWithGithub } from "firebase/client";
import useUser from "hooks/useUser";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGithub().catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Head>
        <title>Devter App 🐷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Logo width={124} height={124} />
          <h1>
            {" "}
            Welcome to Devter
            {user && user.avatar && (
              <>
                <br />
                <strong>{user.username}</strong>
              </>
            )}
          </h1>
          <h2>Talk about development with developers</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={20} height={20} /> Login with Github
              </Button>
            )}
            {user === undefined && <img src="./spinner.gif"></img>}
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
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.secondary};
          text-align: center;
          font-size: 20px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
