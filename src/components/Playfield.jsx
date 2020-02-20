import React, { Component } from "react";

export class Playfield extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.children)
    }


    render() {
        return (
            <div>
                {this.props.children}
                <div id="content">Test</div>
            </div>
        );
    }
}