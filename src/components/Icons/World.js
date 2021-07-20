// MODULES
import React from 'react';
import { BiWorld } from 'react-icons/bi';

function World({ active }) {
  return active ? <BiWorld /> : <BiWorld />;
}

export default World;
