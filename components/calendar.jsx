import { useState } from 'react';
import styles from "./calendar.module.scss";

const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

/* getFirstDayOfMonth function needs current date parameters passed into it to work correctly. We need to set this up next to get to functionality. */
const getFirstDayOfMonth = (month, year) => new Date(year, month - 1, 1).getDay();
console.log(getFirstDayOfMonth(10, 2023));

export default function Calendar({ month, year }) {
  const [selectedDay, setSelectedDay] = useState(null);


  const daysInMonth = getDaysInMonth(month, year) || 31;
  const firstDay = getFirstDayOfMonth(month, year);
  const days = new Array(daysInMonth).fill(null).map((_, i) => i + 1);

  const showModal = (day) => {
    setSelectedDay(day);
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  const renderGrid = () => {
    let grid = [];
    let currentDayIndex = 0;

    for (let i = 0; i < 6; i++) {
      // max 6 weeks in a month
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || currentDayIndex >= daysInMonth) {
          week.push(
            <div key={j} className={styles.cell}>
              -
            </div>
          ); // empty cell
        } else {
          week.push(
            <div key={j} className={styles.cell} onClick={() => showModal(days[currentDayIndex])}>
              {days[currentDayIndex++]}
            </div>
          );
        }
      }
      grid.push(
        <div key={i} className={styles.week}>
          {week}
        </div>
      );
    }

    return grid;
  };

  return (
    <div className={styles.calendar}>
      {renderGrid()}
      {selectedDay && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={closeModal}>Close</span>
            Details for {selectedDay}/{month}/{year}
          </div>
        </div>
      )}
    </div>
  );
};
