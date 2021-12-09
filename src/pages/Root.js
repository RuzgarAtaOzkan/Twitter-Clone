// MODULES
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import { useSelector } from 'react-redux';

// CONFIG
import routesConfig from '../config/routes';

function Root() {
  const history = useHistory();
  const endpoints = { ...routesConfig.endpoints };

  //const auth = useSelector((state) => state.auth);

  useEffect(() => {
    history.push(endpoints.home);
    /*
      if (!auth.authenticated) {
        return history.push(endpoints.signin);
      }

      if (auth.authenticated) {
        return history.push(endpoints.home);
      }
    */

    return () => {};
  });

  return (
    <>
      <section className="root"></section>
    </>
  );
}

export default Root;
