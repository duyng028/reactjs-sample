/*
 * File: containers/Home
 * Desc: generate the home page
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 * Created: 2018-08-26 12:12:07
 */
import React from 'react';
import { Base } from '../../components';
import createPage from '../createPage';
import './style.scss';

class HomePage extends Base {
  static wrapperClasses = 'home-page';

  render() {
    return (
      <div className="page-wrapper">
        <h1>{this.t('Home page')}</h1>
      </div>
    );
  }
}

export default createPage(HomePage);
