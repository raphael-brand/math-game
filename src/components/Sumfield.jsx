import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Sumfield extends Component {

    constructor(props) {
        super(props);
        this.state = { sum: (props.value) }
        this.random = this.random.bind(this);
    }



    render() {
        console.log('remaining:', this.props.remainingTiles)
        return <div className="sumfield">{this.props.value}</div>
    }

    random() {
        let val = this.props.sum();
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
        console.log({ isLower, isGreater })

        //        if (isLower);

        /*        if (sum < 10 && sum > rand) {
                    this.setState({ sum: sum });
                } else
                    if (sum < rand) {
                        this.setState({ sum: sum })
                    }
        */
        this.setState({ sum: val });
        return val;
    }
}

Sumfield.propTypes = {
    remainingTiles: PropTypes.number,
    sum: PropTypes.func
};


