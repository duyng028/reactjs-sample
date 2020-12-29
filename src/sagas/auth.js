/*
 * File: sagas/auth.js
 * Desc: defines saga function related to authorization actions
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import {} from '../actions';
import { authApi } from '../services';
import {
  loginSuccess,
  loginFailed,
} from '../actions/auth';
import { LOGIN, LOGIN_SUCCESS } from '../actions/types';
import { saveRememberAuthData, getRememberAuthData } from '../utils/localData';

function* loginSaga(action) {
  try {
    const { email, password, rememberPassword } = action.payload;
    const response = yield call(authApi.login, email, password);
    if (response && response.token) {
      const { token, user } = response;
      authApi.setToken(token);
      saveRememberAuthData({ token, info: user, rememberPassword });
      yield put(loginSuccess({ token, info: user, rememberPassword }));
      this.props.history.push('/dashboard');
    } else {
      yield put(loginFailed(response));
    }
  } catch (error) {
    console.log('Has error with loginSaga', error);
  }
}

function* setUserToken() {
  const getUserToken = state => state.auth.token;
  const token = yield select(getUserToken);
  if (token) {
    yield call(authApi.setToken, token);
  }
}

function* watchAuthSagas() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeEvery(LOGIN_SUCCESS, setUserToken);
}

export default [watchAuthSagas];
