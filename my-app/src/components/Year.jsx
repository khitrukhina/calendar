import React from "react";
import { Month } from "./Month";
import './year.css';
import uuid from 'react-uuid';

export const Year = (props) => {
  const { year, onYearChange } = props;
  const month = new Array(12).fill().map((item, index) => index + 1);

  return (
    <>
      <div className='year'>
        <button onClick={() => {onYearChange(year - 1)}}>previous</button>
        <div>{year}</div>
        <button onClick={() => {onYearChange(year + 1)}}>next</button>
      </div>
      <div className="month-list">
        {month.map(monthNumber => {
          return <Month key={uuid()} year={year} month={monthNumber}/>
        })
      }
      </div>
    </>
  );
};
