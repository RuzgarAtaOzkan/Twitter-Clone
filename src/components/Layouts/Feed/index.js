// MODULES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// CONFIG
import routesConfig from '../../../config/routes';

// COMPONENTS
import Nav from '../../Nav';
import RecommendationBar from '../../RecommendationBar';

// STYLES
import styles from './Feed.module.scss';

function FeedLayout({ exact, path = '/', component: Component }) {
  if (!path || !Component) {
    throw new Error('Too few arguments specified in FeedLayout.js');
  }

  const endpoints = { ...routesConfig.endpoints };
  //const auth = useSelector((state) => state.auth); TODO uncomment

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
          <main className={cn(styles['feed-layout'])}>
            <Nav />
            <Component />
            <RecommendationBar />
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
