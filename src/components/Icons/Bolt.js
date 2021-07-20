// MODULES
import React from 'react';
import {
  HiLightningBolt,
  HiOutlineLightningBolt,
} from 'react-icons/hi';

function Bolt({ active }) {
  return active ? <HiLightningBolt /> : <HiOutlineLightningBolt />;
}

export default Bolt;
