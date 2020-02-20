import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { GameUI } from './src/components/GameUI';

class MathGame extends Component {
    render() {
        return (
            <div>
                <h1>Hello JSX</h1>
                <GameUI />
            </div>
        );
    }
}

ReactDOM.render(
    <MathGame />,
    document.querySelector('#app')
)