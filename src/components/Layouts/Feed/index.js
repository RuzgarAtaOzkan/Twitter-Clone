// MODULES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';
import RecommendationBar from '../../RecommendationBar';

// STYLES
import styles from './Feed.module.scss';

function FeedLayout({ exact, path = '/', component: Component }) {
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
