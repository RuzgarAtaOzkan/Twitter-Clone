// MODULES
import React, { useState, useEffect } from 'react';

// STYLES
import styles from './AuthForm.module.scss';

function AuthForm({ data }) {
  if (!data) {
    throw new Error('Too few arguments for AuthForm.js');
  }

  if (typeof data !== 'object') {
    throw new Error('Invalid type for data in AuthForm.js');
  }

  const form = data.map((current, index) => {
    return <></>;
  });

  return form;
}

export default AuthForm;
