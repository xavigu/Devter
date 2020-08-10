import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps}/>
  <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
  `}
  </style>
  </>
  )
}
