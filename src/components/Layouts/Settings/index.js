// MODULES
import React from 'react';
//import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// CONFIG
import routesConfig from '../../../config/routes';

// COMPONENTS
import Nav from '../../Nav';

// STYLES
import styles from './Settings.module.scss';

function SettingsLayout({ exact, path = '/', component: Component }) {
  if (!path || !Component) {
    throw new Error('Too few arguments specified in FeedLayout.js');
  }

  const endpoints = { ...routesConfig.endpoints };
  //const auth = useSelector((state) => state.auth);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (false) {
          // !auth.authenticated
          return <Redirect to={endpoints.signin} />;
        }

        return (
          <main className={cn(styles['settings-layout'])}>
            <Nav />
            <Component />
          </main>
        );
      }}
    />
  );
}

export default SettingsLayout;
