// MODULES
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

function LeftArrow({ active }) {
  return active ? <BsArrowLeftShort /> : <BsArrowLeftShort />;
}

export default LeftArrow;
