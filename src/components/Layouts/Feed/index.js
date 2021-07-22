import React, { createContext } from 'react';
import { Route } from 'react-router-dom';
import cn from 'classnames';

// COMPONENTS
import Nav from '../../Nav';
import RecommendationBar from '../../RecommendationBar';
import BottomBar from '../../Nav/BottomBar';

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
            <BottomBar />
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
