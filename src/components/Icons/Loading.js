// MODULES
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading({ active }) {
  return active ? (
    <AiOutlineLoading3Quarters />
  ) : (
    <AiOutlineLoading3Quarters />
  );
}

export default Loading;
