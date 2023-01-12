import React, { Component } from 'react'
import '../styles/Form.css';
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Experiences from './Experiences'
import Button from './Button'


export default class Form extends Component {
    constructor(props) {
        super(props)
    }

    test() {
        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <PersonalDetails></PersonalDetails>
                <Education></Education>
                <Experiences></Experiences>
                <Button color="green" title="Generate CV"></Button>
                <Button color="red" title="Reset" onButtonClicked={this.test}></Button>
            </form>
        )
    }
}
