// MODULES
import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

function _Redirect() {
  const history = useHistory();

  const isSignedin = false;

  useEffect(() => {
    if (!isSignedin) {
      return history.push('/signin');
    }

    return () => {};
  }, []);

  return <>redirect</>;
}

export default _Redirect;
