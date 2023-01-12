import React, { Component } from 'react'
import Input from '../components/Input'
import '../styles/PersonalDetails.css';

export default class PersonalDetails extends Component {
    render() {
        return (
            <div>
                <h2>Personnal Details</h2>
                <Input placeHolder='Name'></Input>
                <Input placeHolder='Email'></Input>
                <Input placeHolder='Phone Number'></Input>
            </div>
        )
    }
}
