// TYPES
import types from './types';

// MODELS
import userModel from './user';

const initialValue = {
  user: userModel,
};

export default function authReducer(state = initialValue, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
