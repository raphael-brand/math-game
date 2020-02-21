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


    constructor(props) {
        super(props);
        this.state = { sum: this.random() };
        this.renderSumField = this.renderSumField.bind(this);
    }

    random() {
        return Math.floor((this.props.minmax.max - this.props.minmax.min) * Math.random()) + parseFloat(this.props.minmax.min);
    }

    renderSumField() {
        const sumfield = <div className="sumfield">{this.state.sum}</div>;
        this.setState({ sum: this.random() });
        return sumfield;
    }

    render() {
        return (
            <div>
                <Playfield matrix={this.props.init()} colors={{ baseFilter, numberColors, colors }}>
                    <div className="test">Math Game</div>
                    <button onClick={this.renderSumField}>New Game</button>
                    <div className="sumfield">{this.state.sum}</div>
                </Playfield>
            </div>
        );
    }
} 