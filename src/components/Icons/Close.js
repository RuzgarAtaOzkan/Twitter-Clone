// MODULES
import React from 'react';
import { GrClose } from 'react-icons/gr';

function Close({ active }) {
  return active ? <GrClose /> : <GrClose />;
}

export default Close;
