import React, { Component } from "react";
import { Playfield } from './Playfield';

export class GameUI extends Component {

    render() {
        return (
            <Playfield matrix={this.props.matrix}>
                <div className="test">Math Game</div>
            </Playfield>);
    }
} 