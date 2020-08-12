import '../styles/globals.css'
import { fonts, colors, breakpoints } from '../styles/theme'
import { addOpacityToColor } from '../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.5);

export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps}/>
  <style jsx global>{`
    html,
    body {
      background-image: 
        radial-gradient(${backgroundColor} 1px, transparent 1px),
        radial-gradient(${backgroundColor} 1px, transparent 1px);
      background-position: 0 0, 25px 25px;
      background-size: 50px 50px;
      padding: 0;
      margin: 0;
      font-family: ${fonts.base}
    }

    @media (min-width: ${breakpoints.mobile}){
      main {
        height: 90vh;
        width: ${breakpoints.mobile};
      }
    }
  `}
  </style>
  </>
  )
}
