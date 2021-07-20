// MODULES
import React from 'react';
import { AiOutlineRetweet } from 'react-icons/ai';

function Retweet({ active }) {
  return active ? <AiOutlineRetweet /> : <AiOutlineRetweet />;
}

export default Retweet;
