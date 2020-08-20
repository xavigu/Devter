import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useState } from "react";
import useUser from "hooks/useUser";
import { addDevit } from "firebase/client";

export default function ComposeDeveet() {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.displayName,
    });
  };

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="¿Qué esta pasando?"
          ></textarea>
          <div>
            <Button disabled={message.length === 0}>Devittear</Button>
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
