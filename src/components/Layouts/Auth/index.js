// MODULES
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import cn from 'classnames';

// STYLES
import styles from './Auth.module.scss';

// AuthLayout
function Auth({ exact, path = '/', component: Component }) {
  if (!path || !Component) {
    throw new Error('Too few arguments specified in FeedLayout.js');
  }

  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Route
        exact={exact}
        path={path}
        render={() => {
          if (auth.authenticated) {
            //return <Redirect to="/home" />;
          }

          return (
            <main className={cn(styles['auth-layout'])}>
              <Component />
            </main>
          );
        }}
      />
    </>
  );
}

export default Auth;
