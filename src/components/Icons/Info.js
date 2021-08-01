// MODULES
import React from 'react';
import {
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from 'react-icons/ai';

function Info({ active }) {
  return active ? <AiFillInfoCircle /> : <AiOutlineInfoCircle />;
}

export default Info;
