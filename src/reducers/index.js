/*
 * File: reducers/index.js
 * Desc: return list reducers
 * Author: DuyNg (duy@megadrupal.com)
 * Created: 2018-07-18 20:45:32
 */
import { combineReducers } from 'redux';
import auth from './auth';

export default combineReducers({
  auth
});
