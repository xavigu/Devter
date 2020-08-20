import AppLayout from "components/AppLayout";
import { useEffect, useState } from "react";
import Devit from "components/Devit";
import useUser from "hooks/useUser";

export default function HomePage(params) {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetch("http://localhost:3000/api/statuses/home_timeline")
        .then((res) => res.json())
        .then(setTimeline); // igual a .then(setTimeline(res))
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
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
