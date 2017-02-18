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
        <h1>todo list</h1>
        <AddTodo addTodo={actions.addTodo} />
      </header>
      <TodoList todos={todos} deleteTodo={actions.deleteTodo}
        toggleTodo={actions.toggleTodo} toggleAll={actions.toggleAll}
        editTodo={actions.editTodo} changeTodo={actions.changeTodo}
        submitTodo={actions.submitTodo}
        moveTodoUp={actions.moveTodoUp} moveTodoDown={actions.moveTodoDown}
        saveTodo={actions.saveTodo} />
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