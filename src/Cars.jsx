import React, { Component } from 'react';

export default class Cars extends Component {
    render() {
        return (
            <div>
                <h1 onClick={this.props.changers}>Car: {this.props.name}</h1>
                <p>Year: {this.props.year}</p>
                <p>Color: {this.props.color}</p>
            </div>
        )
    }
}
