// MODULES
import React from 'react';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';

function Profile({ active }) {
  return active ? <BsFillBookmarkFill /> : <BsBookmark />;
}

export default Profile;
