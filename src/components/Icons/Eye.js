// MODULES
import React from 'react';
import { AiFillEye } from 'react-icons/ai';

function Eye({ active }) {
  return active ? <AiFillEye /> : <AiOutlineEye />;
}

export default Eye;
