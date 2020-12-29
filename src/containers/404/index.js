/*
 * File: containers/404
 * Desc: generate page not found
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import React from 'react';
import { Base } from '../../components';
import './style.scss';

export default class NotFoundPage extends Base {
  static wrapperClasses = 'page-404';

  render() {
    return (
      <div className="page-404-wrapper">
        <div className="content-wrapper">

          <div className="message-wrapper">
            <h2>{this.t('Page not found.')}</h2>
            <div className="home-link">
              <a href="/">{this.t('Back to Home')}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
