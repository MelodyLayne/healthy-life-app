import Calendar from '@components/calendar'
import Link from 'next/link'

export default function CalendarPage() {
  return (
    <>
      <Calendar />
      <Link href="/">Home</Link>
      <Link href="/nutrition">Nutrition</Link>
      <Link href="/workouts">Workouts</Link>
    </>
  )
}