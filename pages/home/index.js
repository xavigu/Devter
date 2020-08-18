import AppLayout from "components/AppLayout";
import { useEffect, useState } from "react";
import Devit from "components/Devit";

export default function HomePage(params) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline); // igual a .then(setTimeline(res))
  }, []);

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
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: fixed;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        article {
          display: flex;
          padding: 10px 15px;
        }

        section {
          padding-top: 56px;
        }

        nav {
          border-top: 1px solid #ccc;
          height: 49px;
          bottom: 0;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
}
