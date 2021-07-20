// MODULES
import React from 'react';
import { FaRegSmile, FaSmile } from 'react-icons/fa';

function Profile({ active }) {
  return active ? <FaSmile /> : <FaRegSmile />;
}

export default Profile;
