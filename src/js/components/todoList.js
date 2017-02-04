'use strict';

import React, { Component } from 'react';
import Todo from '../components/todo'

class TodoList extends Component {
  render() {
    const { todos, deleteTodo } = this.props

    return (
      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            todos.map((todo, index) => <Todo key={index} todo={todo} deleteTodo= {deleteTodo} />)
          }
        </ul>
      </div>
    )
  }
}

export default TodoList