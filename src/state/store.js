// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import authReducer from './auth/reducer';
import globalReducer from './global/reducer';
import settingsReducer from './settings/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  settings: settingsReducer,
});

const store = createStore(rootReducer);

export default store;
