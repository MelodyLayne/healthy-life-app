import Link from 'next/link'

export default function NutritionPage() {
  return (
    <>
      <h1>Nutrition</h1>
      <Link href="/calendar">Calendar</Link>
      <Link href="/">Home</Link>
      <Link href="/workouts">Workouts</Link>
    </>
  )
}