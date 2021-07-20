// MODULES
import React from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';

function Topic({ active }) {
  return active ? <BiMessageAltDetail /> : <BiMessageAltDetail />;
}

export default Topic;
