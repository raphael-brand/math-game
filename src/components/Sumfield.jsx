import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Sumfield extends Component {

    constructor(props) {
        super(props);
        this.random = this.random.bind(this);
        this.state = { sum: 0 }

    }


    render() {
        this.result = this.random(this.props.value)
        console.log('remaining:', this.props.remainingTiles, 'remaining sum: ', this.result.remaining)
        return <div className="sumfield">{this.result.sum}</div>
    }

    random(val) {

        const notSolved = document.querySelectorAll('.image:not(.clicked)');

        let isGreater = false;
        let isLower = false;
        let remaining = 0, count = 0;

        notSolved.forEach((el) => {
            //if (++count > 3) return;
            const val = el.getAttribute('data-value');
            remaining += parseInt(val);
            //isGreater = !isGreater && val < rand
            //                        isLower = !isLower && (val > rand) && sum > rand
        });

        console.info(remaining)
        /*isGreater = sum > 0 && sum < rand;
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
*/
        console.log('remaining sum:', remaining, { isLower, isGreater })

        //        if (isLower);

        /*        if (sum < 10 && sum > rand) {
                    this.setState({ sum: sum });
                } else
                    if (sum < rand) {
                        this.setState({ sum: sum })
                    }
        */
        return { sum: val, remaining };
    }
}

Sumfield.propTypes = {
    remainingTiles: PropTypes.number,
    sum: PropTypes.func
};


