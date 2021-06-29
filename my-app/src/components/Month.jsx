import React from "react";
import uuid from "react-uuid";
import { Day } from "./Day";
import './year.css';

export const Month = ({ year, month}) => {
  const monthDate = new Date(year, month - 1);
  const monthName = monthDate.toLocaleString('default', { month: 'long' });
  const days = Array(31)
    .fill()
    .map((x, index) => ({ label: String(index + 1) }));

  const daysOfWeek = [
    { label: 'Mon' },
    { label: 'Tue' },
    { label: 'Wen' },
    { label: 'Thu' },
    { label: 'Fri' },
    { label: 'Sat' },
    { label: 'Sun' }
  ];

  for(let i = monthDate.getDay() - 1; i > 0;i = i - 1) {
    daysOfWeek.push({ label: '' });
  }

  days.unshift(...daysOfWeek);


  return (
    <div className='month'>
      <div className="month-name">
        {monthName}
      </div>
      <div className="daylist">
        {days.map(day => (
          <Day key={uuid()} day={day.label}/>
        ))}
      </div>
    </div>
  );
};