/*
 * File: components/Checkbox/index.js
 * Desc: generate checkbox component
 * Author: DuyNg (duynv.ktmt50@gmail.com.com)
 */
import React from 'react';
import Base from '../Base';
import './style.scss';

export default class CheckBox extends Base {
  _onValueChange = () => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this._checkboxInput.checked);
    }
  };

  render() {
    const { label } = this.props;
    return (
      <span className="jn-checkbox">
        <span className="checkbox">
          <label
            ref={r => {
              this._labelRef = r;
            }}
          >
            <input
              type="checkbox"
              id={this.props.id}
              onChange={this._onValueChange}
              defaultChecked={this.props.checked}
              ref={r => {
                this._checkboxInput = r;
              }}
            />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
        </span>
        {label && (
          <a
            href="#"
            className="checkbox-label"
            onClick={event => {
              event.preventDefault();
              this._labelRef.click();
            }}
          >
            {this.t(label)}
          </a>
        )}
      </span>
    );
  }
}
