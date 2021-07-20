// MODULES
import React from 'react';
import { BsCardImage, BsFillImageFill } from 'react-icons/bs';

function Image({ active }) {
  return active ? <BsFillImageFill /> : <BsCardImage />;
}

export default Image;
