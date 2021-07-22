// MODULES
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// LAYOUTS
import FeedLayout from '../components/Layouts/Feed';

// PAGES
import LoadingPage from '../pages/Loading';

// PAGES
const RootPage = lazy(() => import('../pages/Root.js'));
const HomePage = lazy(() => import('../pages/Home.js'));
const ExplorePage = lazy(() => import('../pages/Explore.js'));

function AuthorizedRoutes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Switch>
            <Route exact path="/" component={RootPage} />
            <FeedLayout path="/home" component={<HomePage />} />
            <FeedLayout path="/explore" component={<ExplorePage />} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default AuthorizedRoutes;
