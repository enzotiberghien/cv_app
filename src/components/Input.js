import React, { Component } from 'react'
import '../styles/Input.css';


export default class Input extends Component {
    constructor(props) {
        super(props)
    }  

  render() {
    return (
      <input placeholder={this.props.placeHolder}></input>
    )
  }
}