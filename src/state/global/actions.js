// TYPES
import types from './types';

export function setSidebar(payload) {
  return {
    type: types.SET_SIDEBAR,
    payload,
  };
}
