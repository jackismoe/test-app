import React from 'react'
import Form from './FormFormREADME'
import DisplayData from './DisplayFormREADME.js'

export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      submittedData: []
    }
  }

  handleName = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  render() {
    return(
      <div>
        <h1>Forms README</h1>
        <Form formData={this.state} handleName={this.handleName} handleSubmit={this.handleSubmit} />
        <DisplayData formData={this.state} />
        <hr></hr>
      </div>
    )
  }
}