import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// LAYOUTS
import FeedLayout from '../components/Layouts/Feed';

// PAGES
const HomePage = lazy(() => import('../pages/Home.js'));

function AuthorizedRoutes() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <FeedLayout path="/home" component={<HomePage />} />
            <FeedLayout path="/explore" component={<HomePage />} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default AuthorizedRoutes;
