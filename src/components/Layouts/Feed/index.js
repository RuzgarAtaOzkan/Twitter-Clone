import React from 'react';
import { Route, Link } from 'react-router-dom';
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
      render={(props) => {
        return (
          <main>
            <div className={cn(styles['default-layout'])}>
              <Nav />
              {component}
              <RecommendationBar />
            </div>
          </main>
        );
      }}
    />
  );
}

export default FeedLayout;
