import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import useDateTimeFormat from "hooks/useDateTimeFormat";

export default function Devit({
  avatar,
  createdAt,
  userName,
  userId,
  img,
  content,
  id,
}) {
  const timeago = useTimeAgo(createdAt);
  const createdAtFormated = useDateTimeFormat(createdAt);

  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <time title={createdAtFormated}>{timeago}</time>
          </header>
          <p>{content}</p>
          {img && <img src={img}></img>}
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
        img {
          border-radius: 10px;
          margin-top: 10px;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  );
}
