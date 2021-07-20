// MODULES
import React from 'react';
import { CgMoreO } from 'react-icons/cg';

function More({ active }) {
  return active ? <CgMoreO /> : <CgMoreO />;
}

export default More;
