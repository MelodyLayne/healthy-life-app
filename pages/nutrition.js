import Link from 'next/link'
import NutritionPlan from '@components/nutritionPlan'

export default function NutritionPage() {
  return (
    <>
      <h1>Nutrition</h1>
      <NutritionPlan />
      <Link href="/calendar">Calendar</Link>
      <Link href="/">Home</Link>
      <Link href="/workouts">Workouts</Link>
    </>
  )
}