'use strict';

import React, { Component } from 'react';
import Todo from './todo'
import Footer from './footer'
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

  handleFilterChange(filter) {
    console.log(filter);
    this.setState({ filter: filter })
  }

  render() {
    const { todos, deleteTodo, toggleTodo, changeTodo } = this.props
    const { filter } = this.state
    const filteredTodos = todos.filter(filters[filter])
    const activeCount = todos.reduce((count, todo) => {
      return todo.status === 'active' ? count + 1 : count
    }, 0)

    return (
      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            todos.map((todo, index) => <Todo key={index} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} changeTodo={changeTodo}/>)
          }
        </ul>
        <Footer filter={filter}
                activeCount={activeCount}
                onFilterChange={this.handleFilterChange.bind(this)} />
      </div>
    )
  }
}

export default TodoList