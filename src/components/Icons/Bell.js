// MODULES
import React from 'react';
import { BsBell, BsBellFill } from 'react-icons/bs';

function Bell({ active }) {
  return active ? <BsBellFill /> : <BsBell />;
}

export default Bell;
