// TYPES
import types from './types';

const initialValue = {
  isSidebarOpen: false,
  language: 'en',
  isLoading: false,
};

export default function globalReducer(state = initialValue, action) {
  switch (action.type) {
    case types.SET_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };

    default:
      return state;
  }
}
