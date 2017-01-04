'use strict';

import React, { Component } from 'react'

class AddTodo extends Component {
  render() {
    return (
      <input className="new-todo" type="text" placeholder="What's need to be done?" />
    )
  }
}

export default AddTodo