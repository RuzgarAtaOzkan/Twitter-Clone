// MODULES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';

// STYLES
import styles from './Settings.module.scss';

function SettingsLayout({ exact, path = '/', component }) {
  //const auth = useSelector((state) => state.auth); TODO uncomment

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (false) {
          // !auth.user
          return <Redirect to="/login" />;
        }

        return (
          <main className={cn(styles['settings-layout'])}>
            <Nav />
            {component}
          </main>
        );
      }}
    />
  );
}

export default SettingsLayout;
