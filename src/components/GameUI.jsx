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
        const rand = Math.floor((this.props.minmax.max - this.props.minmax.min) * Math.random()) + parseFloat(this.props.minmax.min);
        const notSolved = document.querySelectorAll('.image:not(.clicked)');

        let isGreater = false;
        let isLower = false;
        let sum, count = 0;

        notSolved.forEach((el) => {
            //if (++count > 3) return;
            const val = el.getAttribute('data-value');
            sum += parseInt(val);
            //isGreater = !isGreater && val < rand
            //                        isLower = !isLower && (val > rand) && sum > rand
        });

        isGreater = sum > 0 && sum < rand;
        isLower = sum > 0 && sum > rand
        if (isGreater && notSolved.length < 4) {
            console.log('is gt & rest less than 4')
            return sum;
        }

        if (isLower && notSolved.length < 4) {
            console.log('is lt & rest less than 4')
            return sum;
        }

        if (sum > rand && notSolved.length < 4) {
            return sum;
        }

        console.log({ isLower, isGreater })

        //        if (isLower);

        /*        if (sum < 10 && sum > rand) {
                    this.setState({ sum: sum });
                } else
                    if (sum < rand) {
                        this.setState({ sum: sum })
                    }
        */
        return rand;
    }

    newGame() {
        this.setState({ matrix: this.props.init() });

        document.querySelectorAll('.clicked').forEach((el) => {
            el.classList.remove('clicked');
        });

        this.renderSumField();
    }

    renderSumField() {
        let newVal = this.random();
        const sumfield = <div className="sumfield">{this.state.sum}</div>;
        this.setState({ sum: newVal });
        return sumfield;
    }

    play(number, id, obj) {
        const sum = this.state.sum;
        let newVal = this.random();
        if (sum - number > 0) {
            this.setState({ sum: sum - number })
        } else if (sum - number === 0) {
            this.setState({ sum: newVal });
        }
        else return;

        obj.classList.add('clicked');
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