import AppLayout from "components/AppLayout";
import { useEffect, useState } from "react";
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import { fetchLatestDevits } from "firebase/client";

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
        <nav></nav>
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
          height: 49px;
          bottom: 0;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  );
}
