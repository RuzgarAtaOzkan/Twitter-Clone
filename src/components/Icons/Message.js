// MODULES
import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

function Message({ active }) {
  return active ? <FiMessageCircle /> : <FiMessageCircle />;
}

export default Message;
