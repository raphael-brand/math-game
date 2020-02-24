import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Sumfield extends Component {

    constructor(props) {
        super(props);
        this.random = this.random.bind(this);
        this.state = { sum: 0 }
        this.not_solved = new Object();

    }


    render() {
        this.result = this.random(this.props.value)
        console.log('not solved', JSON.stringify(this.not_solved))
        console.log('remaining:', this.props.remainingTiles, 'remaining sum: ', this.result.remaining)
        return <div className="sumfield">{this.result.sum}</div>
    }

    random(val) {

        const notSolved = document.querySelectorAll('.image:not(.clicked)');
        let newVal = val;
        let isGreater = false;
        let isLower = false;
        let remaining = 0, count = 0;
        this.not_solved = {};

        notSolved.forEach((el) => {
            const val = el.getAttribute('data-value');
            remaining += parseInt(val);
            this.not_solved[el.getAttribute('data-key').toString()] = parseInt(val);
        });

        if (remaining <= 20 && remaining > 0) {
            newVal = remaining
        }

        //        console.log('remaining sum:', remaining, { isLower, isGreater });

        return { sum: newVal, remaining, not_solved: this.not_solved };
    }
}

Sumfield.propTypes = {
    remainingTiles: PropTypes.number,
    sum: PropTypes.func
};


