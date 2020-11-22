import React from 'react'

export default class Tickler extends React.Component {
  tickle = () => {
    console.log('Tee hee!')
  }

  render() {
    return(
      <div>
        <h1>Events in React</h1>
        <p>(console.log's message on click)</p>
        <button onClick={this.tickle}>Tickle Me!</button>
        <hr></hr>
      </div>

    )
  }
}