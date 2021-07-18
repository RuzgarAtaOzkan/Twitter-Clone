import types from './types';

export function login(payload) {
  return {
    type: types.LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
