// MODULES
import React, { useEffect, useState } from 'react';

// API
import request from '../api/request';

// METHODS
import methods from '../api/methods';

// COMPONENTS
import AuthForm from '../components/AuthForm';

function Signup() {
  const formData = [];

  return (
    <>
      <AuthForm />
    </>
  );
}

export default Signup;
