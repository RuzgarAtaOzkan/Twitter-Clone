// MODULES
import React from 'react';
import { RiFileList2Fill, RiFileList2Line } from 'react-icons/ri';

function Profile({ active }) {
  return active ? <RiFileList2Fill /> : <RiFileList2Line />;
}

export default Profile;
