import React from 'react';
import { Route, Link } from 'react-router-dom';

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
            <Nav />
            <Component {...props} />
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
