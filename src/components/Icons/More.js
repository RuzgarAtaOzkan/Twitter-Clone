// MODULES
import React from 'react';
import { CgMoreO } from 'react-icons/cg';

function Gif({ active }) {
  return active ? <CgMoreO /> : <CgMoreO />;
}

export default Gif;
