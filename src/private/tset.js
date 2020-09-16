import React, { Component } from 'react';
import Image from '../img/logo192.png'

class Tset extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>Age: {this.props.age}</div>
        <div>Id: {this.props.id}</div>
        <img src={this.props.image} alt='uououo'/>
      </div>
    );
  }
}

Tset.defaultProps = {
  name : 'Sungha',
  age : 21,
  id : 'blacklego',
  image : Image
}

export default Tset;