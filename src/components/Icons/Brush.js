// MODULES
import React from 'react';
import { RiBrushLine, RiBrushFill } from 'react-icons/ri';

function Brush({ active }) {
  return active ? <RiBrushFill /> : <RiBrushLine />;
}

export default Brush;
