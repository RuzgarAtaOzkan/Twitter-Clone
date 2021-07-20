// MODULES
import React from 'react';
import { RiFileGifLine, RiFileGifFill } from 'react-icons/ri';

function Gif({ active }) {
  return active ? <RiFileGifFill /> : <RiFileGifLine />;
}

export default Gif;
