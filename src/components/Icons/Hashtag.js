// MODULES
import React from 'react';
import { HiOutlineHashtag, HiHashtag } from 'react-icons/hi';

function Hashtag({ active }) {
  return active ? <HiHashtag /> : <HiOutlineHashtag />;
}

export default Hashtag;
