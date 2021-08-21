// TYPES
import types from './types';

const initialValue = {
  theme: 'light',
  language: 'en',
};

export default function settingsReducer(
  state = initialValue,
  action,
) {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}
