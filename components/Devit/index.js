import Avatar from "components/Avatar";
import useUser from "hooks/useUser";

export default function Devit({
  avatar,
  createdAt,
  userName,
  userId,
  content,
  id,
}) {
  const user = useUser();

  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> . </span>
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
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
        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
