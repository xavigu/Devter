import { colors } from "../../styles/theme";

export default function Button ({ children, onClick}) {
  return (
    <>
      <button onClick={onClick}>
        {children}
      </button>
      <style jsx>{`

        button{
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
          transition: opacity .3s ease;
        }  

        {/* css si dentro del boton mira si en el primer nivel de hijo (operando >) hay un svg */}
        button > :global(svg){
          margin-right: 8px;
        }

        button:hover {
          opacity: .7;
        }

      `}</style>
    </>
  )
}
