'use strict';

import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleEnter (e) {
    if (e.key === 'Enter') {
      const text = e.target.value
      if (text.length !== 0) {
        this.props.addTodo(text)
        this.setState({ text: '' })
      }
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }


  render() {
    return (
      <input className="new-todo"
        type="text"
        placeholder="What's need to be done?"
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyPress={this.handleEnter.bind(this)} />
    )
  }
}

export default AddTodo