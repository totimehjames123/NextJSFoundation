import React from 'react'
import Link from 'next/link'

type Time = {
    datetime: 'string';
  }

export default async function page() {

    const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago', {
        // cache: 'no-store'
        next: {
            revalidate: 5
        }
      })
    const data: Time = await res.json()
  return (
    <div>
      This my about page
      <br />
      <h1><b>{data.datetime}</b></h1>
      <br />
      <Link href="/">Go to Home Page</Link>
      <Link href="./help">Help</Link>
    </div>
  )
}
