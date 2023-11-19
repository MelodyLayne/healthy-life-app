import { useState, createContext, useContext, useEffect } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workout, setWorkout] = useState({
    name: '',
    day: '',
    focus: {
      cardio: false,
      strength: false,
      flexibility: false,
    },
    exercises: {
      name: '',
      muscleGroup: '',
      weight: 0,
      reps: 0,
      sets: 0,
      caloriesBurned: 0,
      distance: 0,
    },
  });

  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}