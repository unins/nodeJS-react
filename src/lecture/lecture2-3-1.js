import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Codelab extends Component {
  render() {
      return (
          <div>
              <h1>Hello {this.props.name}</h1>
              <h2>{this.props.number}</h2>
              <div>{this.props.children}</div>
          </div>
      );
  }
}

Codelab.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name: 'Unknown'
};