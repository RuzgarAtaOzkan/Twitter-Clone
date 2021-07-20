// MODULES
import React from 'react';
import { FaRegSmile, FaSmile } from 'react-icons/fa';

function Smile({ active }) {
  return active ? <FaSmile /> : <FaRegSmile />;
}

export default Smile;
