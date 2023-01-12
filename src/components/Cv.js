import React, { Component } from 'react'
import '../styles/Cv.css';


export default class Cv extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='cv' content={this.props.content}>
        <h2>Resume</h2>
        <h3>{this.props.content.Name}</h3>
        <h3>{this.props.content.Email}</h3>
        <h3>{this.props.content.PhoneNumber}</h3>
        <h2>Education</h2>
        {this.props.content.SchoolName.map((e,i) => {
          return <h3>{this.props.content.SchoolName[i]} - {this.props.content.TitleofStudy[i]} - {this.props.content.DateofStudy[i]}</h3>
        })}
        <h2>Experiences</h2>
        {this.props.content.CompanyName.map((e,i) => {
          return <h3>{this.props.content.CompanyName[i]} - {this.props.content.PositionTitle[i]} - {this.props.content.MainTasks[i]} - {this.props.content.CompanyName[i]}</h3>
        })}
      </div>
    )
  }
}
