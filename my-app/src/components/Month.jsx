import React from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Day } from "./Day";
import './year.css';
import { createDayOfWeekNames } from "../tools/dateTools.js";

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: unset;
    }
`;

export const Month = ({ year, month, day}) => {
  const monthDate = new Date(year, month - 1);
  const monthName = monthDate.toLocaleDateString('default', { month: 'long' });

  const daysOfWeek = createDayOfWeekNames();


  const days = [];

  while (monthDate.getMonth() === month - 1){
    days.push({ label: monthDate.getDate() });
    monthDate.setDate(monthDate.getDate() + 1);
  }

  for (let i = new Date(year, month - 1).getDay(); i > 0; i = i - 1 ) {
    days.unshift( {label: ''} );
  }

  days.unshift(...daysOfWeek);

  return (
    <div className='month'>
      <StyledLink to={`/year/${year}/month/${month}`}>
        <div className="month-name">
          {monthName}
        </div>
      </StyledLink>
      <div className="daylist">
        {days.map(day => (
          <Day key={uuid()} year={year} month={month} day={day.label}/>
        ))}
      </div>
    </div>
  );
};
