// MODULES
import React from 'react';
import { MdHelpOutline, MdHelp } from 'react-icons/md';

function QuestionMark({ active }) {
  return active ? <MdHelp /> : <MdHelpOutline />;
}

export default QuestionMark;
