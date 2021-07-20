import React from 'react';
import { Route } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';
import RecommendationBar from '../../RecommendationBar';

// STYLES
import styles from './Feed.module.scss';

function FeedLayout({ exact, path = '/', component }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          <main className={styles['feed-layout']}>
            <Nav />
            {component}
            <RecommendationBar />
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
