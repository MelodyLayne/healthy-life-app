import { useState, createContext, useContext, useEffect } from "react";

const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {
  const [calorieIntake, setCalorieIntake] = useState(2000);
  const [calorieBurn, setCalorieBurn] = useState({
    exercise: 0,
    bmr: 0,
    total: 0,
  });
  const [mealCalories, setMealCalories] = useState(0);
  const [totalMacro, setTotalMacro] = useState({
    protein: 0,
    carbs: 0,
    fat: 0,
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
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
};

export const useNutrition = () => useContext(NutritionContext);
