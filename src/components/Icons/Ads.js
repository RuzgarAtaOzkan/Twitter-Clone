// MODULES
import React from 'react';
import {
  RiAdvertisementFill,
  RiAdvertisementLine,
} from 'react-icons/ri';

function Ads({ active }) {
  return active ? <RiAdvertisementFill /> : <RiAdvertisementLine />;
}

export default Ads;
