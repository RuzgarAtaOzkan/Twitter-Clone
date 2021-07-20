// MODULES
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// LAYOUTS
import FeedLayout from '../components/Layouts/Feed';

// PAGES
import LoadingPage from '../pages/Loading';

// PAGES
const HomePage = lazy(() => import('../pages/Home.js'));

function AuthorizedRoutes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
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
