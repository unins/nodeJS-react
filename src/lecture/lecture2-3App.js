import React, { Component } from 'react';
import Codelab from './lecture2-3-1'

class App extends Component {
    render() {
        return (
            <Codelab name={this.props.name} number=
            {this.props.number}>{this.props.children}
            </Codelab>
        );
    }
}

export default App