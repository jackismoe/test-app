import React, {Component} from 'react'

export default class MyComp extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  
  render() {
    return(
      <div>
        <h1>State README</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Make it Count</button>
        <hr></hr>
      </div>
    )
  }
}