import React from 'react'

export default class Form extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type='text'
            name='firstName'
            onChange={event => this.props.handleName(event)}
            placeholder={'jack'} 
          />

          <input 
            type='text'
            name='lastName'
            onChange={event => this.props.handleName(event)}
            placeholder={'isMoe'} 
          />
        </form>
      </div>
    )
  }
}