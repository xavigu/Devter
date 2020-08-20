import { colors } from "styles/theme";

export default function Button({ children, disabled, onClick }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background: ${colors.black};
          border: 0;
          border-radius: 9999px;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          user-select: none;
        }

        /* si el boton tiene el atributo disabled */
        button[disabled] {
          pointer-events: none; /*que no reaccione a ningun evento*/
          opacity: 0.2;
        }

        /* css si dentro del boton mira si en el primer nivel de hijo (operando >) hay un svg */
        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
