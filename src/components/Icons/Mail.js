// MODULES
import React from 'react';
import { HiOutlineMail, HiMail } from 'react-icons/hi';

function Profile({ active }) {
  return active ? <HiMail /> : <HiOutlineMail />;
}

export default Profile;
