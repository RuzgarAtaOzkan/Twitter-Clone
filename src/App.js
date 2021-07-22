// MODULES
import React from 'react';
import { Provider } from 'react-redux';

// ROUTES
import Routes from './routes';

// STORE
import store from './state/store';

import './styles/index.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
