import React, { Component } from "react";
import { Playfield } from './Playfield';

export class GameUI extends Component {

    renderSumField(number_string) {
        const sumfield = <div className="sumfield">{number_string}</div>;
        this.sum = parseFloat(number_string);
        return sumfield;
    }

    render() {
        return (
            <div>
                {this.renderSumField("15")}
                <Playfield matrix={this.props.matrix}>
                    <div className="test">Math Game</div>
                </Playfield>
            </div>
        );
    }
} 