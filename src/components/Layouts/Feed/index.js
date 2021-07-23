import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';
import RecommendationBar from '../../RecommendationBar';
import BottomBar from '../../Nav/BottomBar';

// STYLES
import styles from './Feed.module.scss';

function FeedLayout({ exact, path = '/', component }) {
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
            {component}
            <RecommendationBar />
            <BottomBar />
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
