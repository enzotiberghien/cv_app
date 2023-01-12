import './styles/App.css';
import Title from './components/Title'
import Form from './components/Form'
import Cv from './components/Cv'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.createCv = this.createCv.bind(this);
    this.state = {
      content: {
        "Name": "",
        "Email": "",
        "PhoneNumber": "",
        "SchoolName": [],
        "TitleofStudy": [],
        "DateofStudy": [],
        "CompanyName": [],
        "PositionTitle": [],
        "MainTasks": [],
        "Date": [],
      }
    }
  }

  createCv(e) {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    let inputObj = {
      "Name": "",
      "Email": "",
      "PhoneNumber": "",
      "SchoolName": [],
      "TitleofStudy": [],
      "DateofStudy": [],
      "CompanyName": [],
      "PositionTitle": [],
      "MainTasks": [],
      "Date": [],
    }
    inputs.forEach(input => {
      if (typeof inputObj[input.placeholder.replace(/\s/g, "")] === "string") {
        inputObj[input.placeholder.replace(/\s/g, "")] = input.value
      } else inputObj[input.placeholder.replace(/\s/g, "")].push(input.value)

    })

    this.setState({
      content: inputObj
    })
  }

  render() {
    return (
      <>
        <Title title="CV APPLICATION"></Title>
        <Form submit={this.createCv}></Form>
        <Cv content={this.state.content}></Cv>
      </>
    )
  }
}
