// MODULES
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Root() {
  const auth = useSelector((state) => state.auth);

  if (!auth.user) {
    return <Redirect to="/signin" />;
  }

  return <Redirect to="/home" />;
}

export default Root;
