import React, { Component } from 'react'
import '../styles/Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, onButtonClicked, color } = this.props;

        return (
            <button onClick={onButtonClicked} className={color}>{title}</button>
        )
    }
}
