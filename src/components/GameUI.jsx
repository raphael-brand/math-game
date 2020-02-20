import React, { Component } from "react";
import { Playfield } from './Playfield';

export class GameUI extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Playfield matrix={[[1, 2, 3], [1, 2, 3], [1, 2, 3]]} >
                <div className="test">Math Game</div>
            </Playfield>);
    }
} 