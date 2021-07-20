// MODULES
import React from 'react';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

function Profile({ active }) {
  return active ? <BsPersonFill /> : <BsPerson />;
}

export default Profile;
