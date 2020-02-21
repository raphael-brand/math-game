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
        this.state = { sum: this.random(), matrix: this.props.init() };
        this.renderSumField = this.renderSumField.bind(this);
        this.newGame = this.newGame.bind(this);
        this.play = this.play.bind(this);
    }

    random() {
        return Math.floor((this.props.minmax.max - this.props.minmax.min) * Math.random()) + parseFloat(this.props.minmax.min);
    }

    newGame() {
        this.setState({ matrix: this.props.init() });

        document.querySelectorAll('.clicked').forEach((el) => {
            el.classList.remove('clicked');
        });

        this.renderSumField();
    }

    renderSumField() {
        const sumfield = <div className="sumfield">{this.state.sum}</div>;
        this.setState({ sum: this.random() });
        return sumfield;
    }

    play(number, id) {
        const sum = this.state.sum;
        if (sum - number > 0) {
            this.setState({ sum: sum - number })
        } else if (sum - number === 0) {
            this.setState({ sum: this.random() });
        }
        else return;

        document.querySelector(`div[data-key="${id}"]`).classList.add('clicked');
    }

    render() {
        return (
            <div>
                <Playfield onClick={this.play} matrix={this.state.matrix} colors={{ baseFilter, numberColors, colors }}>
                    <div className="test">Math Game</div>
                    <button onClick={this.newGame}>New Game</button>
                    <div className="sumfield">{this.state.sum}</div>
                </Playfield>
            </div>
        );
    }
} 