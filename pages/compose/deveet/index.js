import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useState } from "react";

export default function ComposeDeveet() {
  const [user, setUser] = useState();

  return (
    <>
      <AppLayout>
        <form>
          <textarea placeholder="¿Qué esta pasando?"></textarea>
          <div>
            <Button>Devittear</Button>
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
