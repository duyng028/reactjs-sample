/*
 * File: actions/auth.js
 * Desc: defines actions related to login
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNOUT,
  SHOW_AUTH_POPUP,
  HIDE_AUTH_POPUP,
} from './types';

export const login = (email, password, rememberPassword) => {
  return {
    type: LOGIN,
    payload: { email, password, rememberPassword }
  };
};

export const loginSuccess = userInfo => {
  return {
    type: LOGIN_SUCCESS,
    payload: userInfo
  };
};

export const loginFailed = message => {
  return {
    type: LOGIN_FAILED,
    payload: { message }
  };
};

export const signOut = (setDataFlag = true) => {
  return {
    type: SIGNOUT,
    payload: { setDataFlag }
  };
};

export const showAuthPopup = (form = 'login', data = null) => {
  return {
    type: SHOW_AUTH_POPUP,
    payload: { form, data }
  };
};

export const hideAuthPopup = () => {
  return {
    type: HIDE_AUTH_POPUP
  };
};