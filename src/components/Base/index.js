/*
 * File: Base/index.js
 * Desc: provide abstract component what will contain default features like translate ....
 * Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import React from 'react';
import PropTypes from 'prop-types';

const en_data = require('../../constants/en.json');

const trans_data = {
  en: en_data
};

export default class Base extends React.Component {
  static propsType = {
    language: PropTypes.string.isRequired
  };

  static defaultProps = {
    language: 'en'
  };

  t = originalString => {
    const { language } = this.props;
    if (trans_data[language] && trans_data[language][originalString]) { 
      return trans_data[language][originalString]; 
    }
    return originalString;
  };
}