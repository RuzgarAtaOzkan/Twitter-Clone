// MODULES
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';

function Topic({ active }) {
  return active ? <AiOutlineTwitter /> : <AiOutlineTwitter />;
}

export default Topic;
