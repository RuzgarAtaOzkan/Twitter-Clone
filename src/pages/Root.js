// MODULES
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// CONFIG
import routesConfig from '../config/routes';

function Root() {
  const endpoints = { ...routesConfig.endpoints };

  const auth = useSelector((state) => state.auth);

  if (!auth.user || !auth.user.authorized) {
    return <Redirect to={endpoints.signin} />;
  }

  return <Redirect to={endpoints.home} />;
}

export default Root;
