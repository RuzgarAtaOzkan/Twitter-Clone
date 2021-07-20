// MODULES
import React from 'react';
import { FiPieChart } from 'react-icons/fi';

function PieChart({ active }) {
  return active ? <FiPieChart /> : <FiPieChart />;
}

export default PieChart;
