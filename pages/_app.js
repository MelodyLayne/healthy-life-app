import { CalendarProvider } from "@context/CalendarContext"
import { NutritionProvider } from "@context/NutritionContext"
import { WorkoutProvider } from "@context/WorkoutContext"

export default function App({ Component, pageProps }) {
  console.log('-------', NutritionProvider)
  return (
    <CalendarProvider>
      <NutritionProvider>
        <WorkoutProvider>
          <Component {...pageProps} />
        </WorkoutProvider>
      </NutritionProvider>
    </CalendarProvider>
  )
}
