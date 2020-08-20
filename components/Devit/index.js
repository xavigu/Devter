import Avatar from "components/Avatar";
import useUser from "hooks/useUser";

export default function Devit({ avatar, username, message, id }) {
  const user = useUser();

  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          display: flex;
          padding: 10px 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          margin: 0;
          line-height: 1.3125;
        }
      `}</style>
    </>
  );
}
