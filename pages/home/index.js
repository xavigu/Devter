import { useEffect, useState } from "react";
import Link from "next/link";

import { fetchLatestDevits } from "firebase/client";
import AppLayout from "components/AppLayout";
import Create from "components/Icons/Create";
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import Home from "components/Icons/Home";
import Search from "components/Icons/Search";
import { colors } from "styles/theme";

export default function HomePage(params) {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetchLatestDevits().then((devits) => {
        console.log("fetch res: ", devits);
        setTimeline(devits);
      });
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ id, createdAt, userName, userId, avatar, content }) => (
              <Devit
                avatar={avatar}
                createdAt={createdAt}
                id={id}
                key={id}
                content={content}
                userName={userName}
                userId={userId}
              />
            )
          )}
        </section>
        <nav>
          <Link href="/compose/deveet">
            <a>
              <Home width={32} height={32} stroke="#09f" />
            </a>
          </Link>
          <Link href="/search">
            <a>
              <Search width={32} height={32} stroke="#09f" />
            </a>
          </Link>
          <Link href="/home">
            <a>
              <Create width={32} height={32} stroke="#09f" />
            </a>
          </Link>
        </nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        section: {
          flex: 1;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        article {
          display: flex;
          padding: 10px 15px;
        }

        nav {
          background: #fff;
          border-top: 1px solid #eee;
          display: flex;
          height: 49px;
          bottom: 0;
          position: sticky;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }
        /* styles to svgs that are inside of an "a" of a "nav" */
        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  );
}
