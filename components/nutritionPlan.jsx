import { useNutrition } from "@context/NutritionContext";

export default function NutritionPlan() {
  const {
    calorieIntake,
    setCalorieIntake,
    mealCalories,
    setMealCalories,
    mealMacro,
    setMealMacro,
    totalMacro,
    setTotalMacro,
    dailyMeal,
    setDailyMeal,
    addMeal,
    setAddMeal,
  } = useNutrition();

  const handleProteinChange = (e) => {
    const newProteinMacro = e.target.value;
    const newPercentOfDailyTotal = (newProteinMacro / totalMacro.protein) * 100;
    setMealMacro({
      ...mealMacro,
      protein: {
        ...mealMacro.protein,
        grams: newProteinMacro,
        percentOfDailyTotal: newPercentOfDailyTotal,
      },
    });
  };

  const handleCarbsChange = (e) => {
    const newCarbsMacro = e.target.value;
    const newPercentOfDailyTotal = (newCarbsMacro / totalMacro.carbs) * 100;
    setMealMacro({
      ...mealMacro,
      carbs: {
        ...mealMacro.carbs,
        grams: newCarbsMacro,
        percentOfDailyTotal: newPercentOfDailyTotal,
      },
    });
  };

  const handleFatChange = (e) => {
    const newFatMacro = e.target.value;
    const newPercentOfDailyTotal = (newFatMacro / totalMacro.fat) * 100;
    setMealMacro({
      ...mealMacro,
      fat: {
        ...mealMacro.fat,
        grams: newFatMacro,
        percentOfDailyTotal: newPercentOfDailyTotal,
      },
    });
  };

  return (
    <div>
      <div>
        <h2>Calorie Intake</h2>
        <input
          type="number"
          value={calorieIntake}
          onChange={(e) => setCalorieIntake(e.target.value)}
        />
      </div>
      <div>
        <h2>Macros</h2>
        <div>
          <h2>Total Daily Macros</h2>
          <div>
            <div>
              <h3>
                Protein: <span>{totalMacro.protein} grams</span>
              </h3>
            </div>
            <div>
              <h3>
                Carbs: <span>{totalMacro.carbs} grams</span>
              </h3>
            </div>
            <div>
              <h3>
                Fat: <span>{totalMacro.fat} grams</span>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <h2
            onClick={() => {
              setAddMeal(true);
            }}
          >
            Add a Meal
          </h2>
          {addMeal && (
            <div>
              <div>
                <h3>Protein</h3>
                <label>Amount in Grams: </label>
                <input
                  type="number"
                  value={mealMacro.protein.grams}
                  min={0}
                  onChange={handleProteinChange}
                />
                <p>Percent of Daily Total = {mealMacro.protein.percentOfDailyTotal}%</p>
              </div>
              <div>
                <h3>Carbs</h3>
                <label>Amount in Grams: </label>
                <input
                  type="number"
                  value={mealMacro.carbs.grams}
                  min={0}
                  onChange={handleCarbsChange}
                />
                <p>Percent of Daily Total = {mealMacro.carbs.percentOfDailyTotal}%</p>
              </div>
              <div>
                <h3>Fat</h3>
                <label>Amount in Grams: </label>
                <input
                  type="number"
                  value={mealMacro.fat.grams}
                  min={0}
                  onChange={handleFatChange}
                />
                <p>Percent of Daily Total = {mealMacro.fat.percentOfDailyTotal}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
