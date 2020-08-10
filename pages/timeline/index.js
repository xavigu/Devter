import Link from 'next/link'

export default function Timeline({ userName }) {
  return (
    <div>
      <h1>This is the timeline of {userName}</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}
      </style>
    </div>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
   .then(res => res.json())
   .then(response => {
     console.log(response);
     const {userName} = response;
     return {userName};
   })
}
