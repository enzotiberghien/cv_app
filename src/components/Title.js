import React, { Component } from 'react'
import '../styles/Title.css';

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
