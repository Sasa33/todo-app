'use strict';

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/todoList'

const App = ({todos, actions}) => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo addTodo={actions.addTodo} />
      </header>
      <TodoList todos={todos} deleteTodo={actions.deleteTodo}
        toggleTodo={actions.toggleTodo} toggleAll={actions.toggleAll}
        changeTodo={actions.changeTodo}/>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)