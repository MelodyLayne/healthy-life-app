import { useState, createContext, useContext, useEffect } from 'react';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('date changed');
  }, [date]);

  return (
    <CalendarContext.Provider value={{ date, setDate }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
