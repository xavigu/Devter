import Button from "components/Button";
import { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { addDevit, uploadImage } from "firebase/client";
import { useRouter } from "next/router";
import Head from "next/head";
import Avatar from "components/Avatar";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};
const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeDeveet() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const user = useUser();
  const router = useRouter();

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        console.log("drag completed");
        task.snapshot.ref.getDownloadURL().then(setImgURL); // like .then(imgURL => {setImgURL = imgURL})
      };
      task.on("state_changed", onProgress, onError, onComplete);
    }
  }, [task]);

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    console.log(e.dataTransfer.files[0]);
    const file = e.dataTransfer.files[0];

    const task = uploadImage(file);
    setTask(task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("MESSAGE: ", message, "User: ", user);
    setStatus(COMPOSE_STATES.LOADING);
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
      img: imgURL,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <Head>
        <title>Crear un Deveet / Devter</title>
      </Head>
      <section className="form-container">
        {user && (
          <section className="avatar-container">
            <Avatar src={user.avatar} />
          </section>
        )}
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            placeholder="¿Qué esta pasando?"
          ></textarea>
          {imgURL && (
            <section className="remove-img">
              <button onClick={() => setImgURL(null)}>X</button>
              <img src={imgURL} />
            </section>
          )}
          <div>
            <Button disabled={isButtonDisabled}>Devittear</Button>
          </div>
        </form>
      </section>
      <style jsx>{`
        div {
          padding: 15px;
        }

        form {
          padding: 10px;
        }

        textarea {
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? "3px dashed #09f"
            : "3px dashed transparent"};
          border-radius: 10px;
          outline: 0;
          padding: 15px;
          resize: none;
          font-size: 21px;
          min-height: 200px;
          width: 100%;
        }

        .form-container {
          align-items: flex-start;
          display: flex;
        }

        .avatar-container {
          padding-top: 20px;
          padding-left: 10px;
        }

        .remove-img {
          position: relative;
        }

        button {
          background: rgba(0, 0, 0, 0.7);
          border: 0;
          border-radius: 999px;
          color: #fff;
          font-size: 24px;
          width: 28px;
          height: 28px;
          top: 15px;
          right: 15px;
          position: absolute;
        }

        .remove-img > img {
          border-radius: 10px;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  );
}
