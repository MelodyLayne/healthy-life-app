import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/calendar">Calendar</Link>
      <Link href="/nutrition">Nutrition</Link>
      <Link href="/workouts">Workouts</Link>
    </>
  )
}
