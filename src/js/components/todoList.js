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
    this.setState({ filter: filter })
  }

  render() {
    const { todos, deleteTodo, toggleTodo, toggleAll, editTodo, 
            changeTodo, submitTodo, moveTodoUp, moveTodoDown } = this.props
    const { filter } = this.state
    const filteredTodos = todos.filter(filters[filter])
    const activeCount = todos.reduce((count, todo) => {
      return todo.status === 'active' ? count + 1 : count
    }, 0)

    return (
      <div className="main">
        <input className="toggle-all" type="checkbox" onChange={() => toggleAll()}/>
        <ul className="todo-list">
          {
            filteredTodos.map((todo, index) => <Todo key={index} todo={todo}
              deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} 
              changeTodo={changeTodo} submitTodo={submitTodo}
              moveTodoUp={moveTodoUp} moveTodoDown={moveTodoDown}
              showUp={index > 0} showDown={index < todos.length - 1}  />)
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