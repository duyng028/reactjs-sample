/*
 * @Author: CuongHx
 * @Date: 2018-07-08 17:43:28
 * @Last Modified by:
 * @Last Modified time: 2018-09-11 23:44:48
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  NotFoundPage,
  HomePage,
} from '../containers';

export default {
  notfound: { path: '/404', component: NotFoundPage },
  homePage: {
    path: '/',
    component: HomePage,
    exact: true,
    title: 'Trang chủ'
  },
  others: { component: () => <Redirect to="/404" /> }
};
