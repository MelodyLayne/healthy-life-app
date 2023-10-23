import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Calendar from '@components/calendar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar />
    </>
  )
}
