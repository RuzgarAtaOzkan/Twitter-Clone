// MODULES
import React from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

function Feather({ active }) {
  return active ? <FaFeatherAlt /> : <FaFeatherAlt />;
}

export default Feather;
