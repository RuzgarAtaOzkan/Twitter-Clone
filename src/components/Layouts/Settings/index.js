// MODULES
import React from 'react';
//import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';

// STYLES
import styles from './Settings.module.scss';

function SettingsLayout({ exact, path = '/', component: Component }) {
  //const auth = useSelector((state) => state.auth);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (false) {
          return <Redirect to="/login" />;
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
