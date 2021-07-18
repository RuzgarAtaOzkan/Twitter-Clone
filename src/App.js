// MODULES
import React from 'react';
import { Provider } from 'react-redux';

// ROUTES
import AuthorizedRoutes from './routes/Authorized';

// STORE
import store from './state/store';

import './styles/index.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthorizedRoutes />
      </Provider>
    </>
  );
}

export default App;
