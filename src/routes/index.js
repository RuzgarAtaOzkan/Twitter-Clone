// MODULES
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// COMPONENTS
import GlobalComponents from '../components/Global';

// LAYOUTS
import FeedLayout from '../components/Layouts/Feed';
import SettingsLayout from '../components/Layouts/Settings';

// PAGES
import LoadingPage from '../pages/Loading';

// LAZY LOADING PAGES
const RootPage = lazy(() => import('../pages/Root.js'));
const HomePage = lazy(() => import('../pages/Home.js'));
const ExplorePage = lazy(() => import('../pages/Explore.js'));
const NotificationsPage = lazy(() =>
  import('../pages/Notifications.js'),
);
const MessagesPage = lazy(() => import('../pages/Messages.js'));

function Routes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Switch>
            <Route exact path="/" component={RootPage} />
            <FeedLayout path="/home" component={HomePage} />
            <FeedLayout path="/explore" component={ExplorePage} />
            <FeedLayout
              path="/notifications"
              component={NotificationsPage}
            />
            <SettingsLayout
              path="/messages"
              component={MessagesPage}
            />
          </Switch>

          <GlobalComponents />
        </Router>
      </Suspense>
    </>
  );
}

export default Routes;
