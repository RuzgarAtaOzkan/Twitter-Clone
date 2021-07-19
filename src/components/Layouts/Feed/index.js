import React from 'react';
import { Route, Link } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';

// STYLES
import styles from './Feed.module.scss';

function FeedLayout({ exact, path = '/', component: Component }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <main>
            <div className={cn(styles['default-layout'])}>
              <Nav />
              <Component {...props} />
            </div>
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
