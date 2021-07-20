// MODULES
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

function Twitter({ active }) {
  return active ? <FaTwitter /> : <FaTwitter />;
}

export default Twitter;
