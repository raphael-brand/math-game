import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { GameUI } from './src/components/GameUI';



class MathGame extends Component {


    constructor(props) {
        super(props);
        const sum_min = 2;
        const sum_max = 27;
        this.state = {
            sum_range: [sum_min, sum_max],
            sum_min: sum_min,
            sum_max: sum_max,
        };

        this.sets = new Array();
    }


    initNumbers(amount) {
        const arr = [];
        let sum = 0;
        let index = 0;
        let val;
        while (sum < this.state.sum_max && index < amount) {
            for (let i = 0; arr.length < amount; i++ , index++) {
                val = Math.floor((8 * Math.random()) + 1);
                sum += val;

                if (arr.toString().indexOf(val) > -1) {
                    (sum = sum - val);
                    continue;
                }

                arr.push(val);
            }
        }

        return arr;
    }

    initNumberSets(amount) {
        this.sets = [];
        for (let i = 0; i < amount; i++) {
            this.sets.push(this.initNumbers(amount));
        }

        return this.sets;
    }


    render() {
        return (
            <div>
                <h1>Hello JSX</h1>
                <GameUI matrix={this.initNumberSets(3)} />
            </div>
        );
    }
}

ReactDOM.render(
    <MathGame />,
    document.querySelector('#app')
)