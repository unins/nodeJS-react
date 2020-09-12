import React from 'react';

export default class Codelab extends React.Component {
  render() {
      let text = 'Hi I am codelab';
      let style = {
          backgroundColor: 'aqua'
      };

      return (
          <div style={style}>{text}</div>
      );
  }
}