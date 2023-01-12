import React, { Component } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import uniqid from "uniqid";

export default class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: []
        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickAdd(e) {
        e.preventDefault();
        this.setState({
            inputs: this.state.inputs.concat(
                <div key={uniqid()}>
                    <Input placeHolder="School Name"></Input>
                    <Input placeHolder="Title of Study"></Input>
                    <Input placeHolder="Date of Study"></Input>
                    <Button title="Delete" onButtonClicked={this.onClickDelete}></Button>
                </div>
            )
        })
    }

    onClickDelete(e) {
        e.preventDefault();
        e.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <h2>Education</h2>
                {this.state.inputs}
                <Button title="Add" onButtonClicked={this.onClickAdd}></Button>
            </div>
        )
    }
}