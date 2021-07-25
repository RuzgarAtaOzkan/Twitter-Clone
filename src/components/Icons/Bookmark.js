// MODULES
import React from 'react';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';

function Bookmark({ active }) {
  return active ? <BsFillBookmarkFill /> : <BsBookmark />;
}

export default Bookmark;
