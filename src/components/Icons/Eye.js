// MODULES
import React from 'react';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';

function Eye({ active }) {
  return active ? <AiOutlineEye /> : <AiFillEye />;
}

export default Eye;
