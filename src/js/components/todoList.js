'use strict';

import React, { Component } from 'react';
import Todo from '../components/todo'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/FilterTypes'


const filters = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.status === 'completed',
  [SHOW_ACTIVE]: todo => todo.status === 'active',
}

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: SHOW_ALL
    }
  }

  render() {
    const { todos, deleteTodo } = this.props
    const { filter } = this.state
    const filteredTodos = todos.filter(filters[filter])

    return (
      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            filteredTodos.map((todo, index) => <Todo key={index} todo={todo} deleteTodo= {deleteTodo} />)
          }
        </ul>
      </div>
    )
  }
}

export default TodoList