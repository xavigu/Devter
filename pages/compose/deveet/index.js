import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useState } from "react";
import useUser from "hooks/useUser";
import { addDevit } from "firebase/client";
import { useRouter } from "next/router";
import Head from "next/head";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeDeveet() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const user = useUser();
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
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
      <AppLayout>
        <Head>
          <title>Crear un Deveet / Devter</title>
        </Head>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="¿Qué esta pasando?"
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devittear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }

        textarea {
          border: 0;
          outline: 0;
          padding: 15px;
          resize: none;
          font-size: 21px;
          min-height: 200px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
