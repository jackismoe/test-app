import React from 'react'

export default class Clicker extends React.Component {
  handleClick = (event) => {
    console.log(event.type)
  }

  render() {
    return(
      <div>
        <h1>Events In Detail</h1>
        <p>(console.logs event.type)</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}