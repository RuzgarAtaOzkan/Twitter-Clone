// MODULES
import React, { useEffect, useState } from 'react';

// API
import request from '../api/request';

// METHODS
import methods from '../api/methods';

// COMPONENTS
import AuthForm from '../components/AuthForm';

// ICONS
import TwitterIcon from '../components/Icons/Twitter';

function Signin() {
  const formData = [];

  return (
    <>
      <TwitterIcon />
      <AuthForm data={formData} />
    </>
  );
}

export default Signin;
