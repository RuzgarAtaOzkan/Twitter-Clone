// MODULES
import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

function Heart({ active }) {
  return active ? <IoMdHeart /> : <IoMdHeartEmpty />;
}

export default Heart;
