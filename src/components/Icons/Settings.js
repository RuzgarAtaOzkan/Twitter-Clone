// MODULES
import React from 'react';
import { RiSettings5Fill, RiSettings5Line } from 'react-icons/ri';

function Settings({ active }) {
  return active ? <RiSettings5Fill /> : <RiSettings5Line />;
}

export default Settings;
