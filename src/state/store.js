// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
