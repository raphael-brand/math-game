import React, { Component } from "react";
import { Playfield } from './Playfield';

const baseFilter = 'invert(100%) sepia(100%) ';
const colors = {
    blue: 'saturate(400%) brightness(110%) hue-rotate(162deg)',
    brown: 'saturate(90%) brightness(80%) contrast(200%) hue-rotate(338deg)',
    green: 'saturate(200%) brightness(120%) contrast(100%) hue-rotate(70deg)',
    orange: 'saturate(400%) brightness(120%) hue-rotate(352deg)',
}
const numberColors = ['blue', 'brown', 'green', 'orange', 'blue', 'orange', 'green', 'brown', 'blue']


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
                <Playfield matrix={this.props.matrix} colors={{ baseFilter, numberColors, colors }}>
                    <div className="test">Math Game</div>
                </Playfield>
            </div>
        );
    }
} 