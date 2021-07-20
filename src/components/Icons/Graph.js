// MODULES
import React from 'react';
import { VscGraph } from 'react-icons/vsc';

function Graph({ active }) {
  return active ? <VscGraph /> : <VscGraph />;
}

export default Graph;
