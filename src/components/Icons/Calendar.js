// MODULES
import React from 'react';
import { BsCalendar, BsCalendarFill } from 'react-icons/bs';

function Calendar({ active }) {
  return active ? <BsCalendarFill /> : <BsCalendar />;
}

export default Calendar;
