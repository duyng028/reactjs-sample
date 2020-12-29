/*
 * File: sagas/index
 * Desc: return list sagas what will be used for actions
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import { call, all } from 'redux-saga/effects';
import auth from './auth';

const sagas = [...auth];

export default function* rootSaga() {
  yield all(sagas.map(saga => call(saga)));
}
