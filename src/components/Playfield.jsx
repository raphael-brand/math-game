import React, { Component } from "react";
import NumberTile from "./NumberTile";

export class Playfield extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (document.querySelector('.played.clicked'))
            document.querySelectorAll('.played.clicked').forEach(el => {
                el.classList.remove('clicked');
            });
    }

    clickHandler(index, number) {
        return (e) => {
            if (e.target.classList.toString().indexOf('played') > -1) return;
            this.props.onClick(number, index, e.target);
            // console.log('key:', index, 'number:', number)
        }
    }


    renderPlayfield(matrix, tileObject) {
        const colors = this.props.colors;
        const playfield = [];
        let i = 0;
        matrix.forEach((fields, index, array) => {
            // console.log(value);
            let numberRow = [];
            fields.forEach((number_value) => {
                // if playfield size shall be 50vw 
                const size = 50 / array.length;
                const style = {
                    backgroundPositionX: (Number(number_value) * (50 / array.length) * -1) + 'vw',
                    width: size + 'vw', height: size + 'vw', lineHeight: size + 'vw',
                    filter: colors.baseFilter + ' ' + colors.colors[colors.numberColors[number_value - 1]]
                }
                const field =
                    <div data-key={i} data-value={number_value} key={i} style={style} className="f image" onClick={this.clickHandler(i, number_value)}></div>

                numberRow.push(field);
                i++;
            });
            playfield.push(<div key={index} className="row" > {numberRow}</div>)
        });

        return playfield;
    }

    render() {
        return (
            <div>
                {this.props.children}
                <div className="game">
                    <div className="wrap">
                        {this.renderPlayfield(this.props.matrix)}
                    </div>
                </div>
            </div>
        );
    }
}