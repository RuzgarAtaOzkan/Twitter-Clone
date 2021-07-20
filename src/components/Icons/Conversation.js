// MODULES
import React from 'react';
import { BiConversation } from 'react-icons/bi';

function Conversation({ active }) {
  return active ? <BiConversation /> : <BiConversation />;
}

export default Conversation;
