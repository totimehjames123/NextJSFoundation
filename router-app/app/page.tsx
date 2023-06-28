type Repository = {
  id: number;
  name: string;
  full_name: string;
}
type Time = {
  datetime: string
}


async function getTime(): Promise<Time>{
  const res = await fetch (
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    {
      next: {
        revalidate: 5
      }
    }
  )
  return res.json();
}

async function getRepo(): Promise<Repository> {

  const res = await fetch('http://api.github.com/repos/vercel/next.js')
  return res.json();

}

export default async function Page () {
  const [data, time] = await Promise.all([getRepo(), getTime()])
  return (
    <>
      <h1>{data.full_name}</h1>
      <p>Updated at: {time.datetime}</p>
    </>
  )
}