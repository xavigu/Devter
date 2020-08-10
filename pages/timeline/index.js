import React from 'react'

export default function Timeline() {
  return (
    <div>
      <h1>This is the timeline</h1>
      <Link href='/'>Go home</Link>
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
