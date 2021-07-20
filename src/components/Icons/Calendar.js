// MODULES
import React from 'react';
import { BsCalendar, BsCalendarFill } from 'react-icons/bs';

function Profile({ active }) {
  return active ? <BsCalendarFill /> : <BsCalendar />;
}

export default Profile;
