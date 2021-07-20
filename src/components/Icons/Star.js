// MODULES
import React from 'react';
import { GiJusticeStar } from 'react-icons/gi';

function Start({ active }) {
  return active ? <GiJusticeStar /> : <GiJusticeStar />;
}

export default Start;
