import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MathGame extends Component {
    render() {
        return <h1>Hello JSX</h1>
    }
}

ReactDOM.render(
    <MathGame />,
    document.querySelector('#app')
)