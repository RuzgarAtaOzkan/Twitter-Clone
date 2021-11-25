// MODULES
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// STYLES
import styles from './Auth.module.scss';

// LAYOUT
function Auth({ exact, path = '/', component: Component }) {
  const user = useSelector((state) => state.auth.user);
  if (!path || !Component) {
    throw new Error('Too few arguments specified in FeedLayout.js');
  }

  return (
    <>
      <Route
        exact={exact}
        path={path}
        render={() => {
          if (user.authenticated) {
            return <Redirect to="/home" />;
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
