// TYPES
import types from './types';

export function setTheme(payload) {
  return {
    type: types.SET_THEME,
    payload,
  };
}
