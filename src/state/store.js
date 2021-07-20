// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import authReducer from './auth/reducer';
import globalReducer from './global/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
});

const store = createStore(rootReducer);

export default store;
