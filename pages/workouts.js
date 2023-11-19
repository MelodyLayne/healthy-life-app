import Link from 'next/link'

export default function WorkoutsPage() {
  return (
    <>
      <h1>Workouts</h1>
      <Link href="/">Home</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/nutrition">Nutrition</Link>
    </>
  )
}