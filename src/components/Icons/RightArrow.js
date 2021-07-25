// MODULES
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

function RightArrow({ active }) {
  return active ? <BsArrowRightShort /> : <BsArrowRightShort />;
}

export default RightArrow;
