/*
 * @Author: CuongHx
 * @Date: 2018-07-13 11:41:27
 * @Last Modified by:
 * @Last Modified time: 2018-09-01 17:13:55
 */

// 000: Success
// 400: Show message
// 500: Internet Server Error

import _api from './_request';
import ApiConfig from '../constants/server-config';

const { API_HOST } = ApiConfig;
const host = API_HOST.replace(/\/$/, '');

const login = (email, password) => {
  const url = `${host}/auth/login`;
  return _api.POST(url, { email, password }, Object.assign({ 'Content-Type': 'multipart/form-data' }, _api.addTokenToHeader()));
};

export default {
  login,
};
