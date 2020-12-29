/*
 * File: reducers/user.js
 * Desc: provides user reducer to process actions what relate to user
 * Author: DuyNg (duy@megadrupal.com)
 * Created: 2018-07-20 00:42:31
 */
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNOUT,
  SHOW_AUTH_POPUP,
  LOGIN
} from '../actions/types';

const initState = {
  isLoggedIn: false,
  token: '',
  info: null,
  showAuthPopup: false,
  currentForm: 'login', // login || register || forgot,
  message: null,
};

export default function (state = initState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'persist/REHYDRATE':
      return Object.assign(initState, state);

    case LOGIN:
      return { ...state, message: null };

    case LOGIN_SUCCESS:
      return Object.assign({ isLoggedIn: true }, payload);

    case LOGIN_FAILED:
      return { ...state, isLoggedIn: false, message: payload.message };

    case SIGNOUT:
      return initState;

    case SHOW_AUTH_POPUP:
      return {
        ...state,
        showAuthPopup: true,
        currentForm: payload.form,
        popupData: payload.data
      };

    default:
      return state;
  }
}
