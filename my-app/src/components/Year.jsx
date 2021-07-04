import React from "react";
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';

import { Month } from "./Month";
import './year.css';


/** @type {import('React').FunctionComponent} */
export const Year = (props) => {

  const monthNames = Array.from({length: 12}, (element, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {month: "short"});
 })
  const { year, onYearChange } = props;
  const history = useHistory();
  const month = new Array(12).fill().map((item, index) => index + 1);

  const onMonthChange = (event) => {
    history.push(`/year/${new Date().getFullYear()}/month/${event.target.value}`);
  }

  return (
    <>
      <div className='year'>
        <div>
          <div className='button-year'>
            <button onClick={() => {onYearChange(Number(year - 1))}} className="btn-year">previous</button>
            <div>{year}</div>
            <button onClick={() => {onYearChange(Number(year + 1))}} className="btn-year">next</button>
          </div>
          <div>
            <select  onChange={onMonthChange}>
              {monthNames.map((name, index) => (
                <option key={name} value={index}>{name}</option>
              ))}
            </select>
          </div>
        </div>
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
