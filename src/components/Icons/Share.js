// MODULES
import React from 'react';
import { FiShare } from 'react-icons/fi';

function Share({ active }) {
  return active ? <FiShare /> : <FiShare />;
}

export default Share;
