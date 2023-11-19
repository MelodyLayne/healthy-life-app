import { useState, createContext, useContext } from "react";

const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {
  const [calorieIntake, setCalorieIntake] = useState(2000);
  const [calorieBurn, setCalorieBurn] = useState({
    exercise: 0,
    bmr: 0,
    total: 0,
  });
  const [dailyMeal, setDailyMeal] = useState({
    meal1: '',
    meal2: '',
    meal3: '',
    meal4: '',
    meal5: '',
  });
  const [addMeal, setAddMeal] = useState(false);
  const [mealCalories, setMealCalories] = useState(0);
  const [totalMacro, setTotalMacro] = useState({
    protein: 40,
    carbs: 12,
    fat: 6,
  });
  const [mealMacro, setMealMacro] = useState({
    protein: {
      percentOfDailyTotal: 0,
      grams: 0,
    },
    carbs: {
      percentOfDailyTotal: 0,
      grams: 0,
    },
    fat: {
      percentOfDailyTotal: 0,
      grams: 0,
    },
  });

  return (
    <NutritionContext.Provider
      value={{
        calorieIntake,
        setCalorieIntake,
        calorieBurn,
        setCalorieBurn,
        mealMacro,
        totalMacro,
        setTotalMacro,
        setMealMacro,
        mealCalories,
        setMealCalories,
        dailyMeal,
        setDailyMeal,
        addMeal,
        setAddMeal,
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
};

export const useNutrition = () => useContext(NutritionContext);
