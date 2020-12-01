import React, {Component} from 'react'

export default class HelloWorld extends Component {
  render() {
    return(
      <div>
        <h1>Presentational Components</h1>
        <div className='hello-world'>
          Hello {this.props.message || 'World'}
        </div>
        <hr></hr>
      </div>
    )
  }
}