// MODULES
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// CONFIG
import routesConfig from '../config/routes/index';

// COMPONENTS
import GlobalComponents from '../components/Global';

// LAYOUTS
import FeedLayout from '../components/Layouts/Feed';
import SettingsLayout from '../components/Layouts/Settings';
import AuthLayout from '../components/Layouts/Auth';

// PAGES
import LoadingPage from '../pages/Loading';
// LAZY PAGES

// Root pages
const RootPage = lazy(() => import('../pages/Root.js'));

// Auth layout pages
const SigninPage = lazy(() => import('../pages/Signin.js'));
const SignupPage = lazy(() => import('../pages/Signup.js'));

// Feed layout ages
const HomePage = lazy(() => import('../pages/Home.js'));
const ExplorePage = lazy(() => import('../pages/Explore.js'));
const NotificationsPage = lazy(() =>
  import('../pages/Notifications.js'),
);

// _Redirect pages
const _Redirect = lazy(() => import('../pages/_Redirect.js'));

// Settings layout pages
const MessagesPage = lazy(() => import('../pages/Messages.js'));

function Routes() {
  const endpoints = { ...routesConfig.endpoints };

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Switch>
            {/* Root route */}
            <Route exact path={endpoints.root} component={RootPage} />
            <Route path="/redirect" component={_Redirect} />

            <AuthLayout
              path={endpoints.signup}
              component={SignupPage}
            />

            <AuthLayout
              path={endpoints.signin}
              component={SigninPage}
            />

            {/* Feed Layouts, e.g. Home page, Notifications page */}
            <FeedLayout path={endpoints.home} component={HomePage} />
            <FeedLayout
              path={endpoints.explore}
              component={ExplorePage}
            />
            <FeedLayout
              path={endpoints.notifications}
              component={NotificationsPage}
            />

            {/* Settings Layouts */}
            <SettingsLayout
              path={endpoints.messages}
              component={MessagesPage}
            />
          </Switch>

          {/* Global independent components such as Bottom-Navigation-Bar */}
          <GlobalComponents />
        </Router>
      </Suspense>
    </>
  );
}

export default Routes;
