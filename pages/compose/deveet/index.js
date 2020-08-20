import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useState } from "react";
import useUser from "hooks/useUser";

export default function ComposeDeveet() {
  const user = useUser();

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
