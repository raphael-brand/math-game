import React, { Component } from "react";
import NumberTile from "./NumberTile";

export class Playfield extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.children)
    }


    clickHandler(number) {
        return (e) => {
            console.log('key:', e.currentTarget.getAttribute('key'), 'number:', number)
        }
    }


    renderPlayfield(matrix, tileObject) {

        const playfield = [];
        let i = 0;
        matrix.forEach((fields, index, array) => {
            // console.log(value);
            let numberRow = [];
            fields.forEach((number_value) => {
                const style = {
                    backgroundPositionX: ((Number(number_value)) * -16.6) + 'vw'
                }
                const field =
                    <div key={i} style={style} className="f image" onClick={this.clickHandler(number_value)}></div>

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
                <div id="content">Test</div>
                <div className="game">
                    <div className="wrap">
                        {this.renderPlayfield(this.props.matrix)}
                    </div>
                </div>
            </div>
        );
    }
}