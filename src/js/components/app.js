'use strict';

import React from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/todoList'
import Footer from '../containers/footer'

const dummyTodos = [
  { id: 0, status: 'completed', text: 'make components' },
  { id: 1, status: 'active', text: 'design actions' },
  { id: 2, status: 'active', text: 'implement reducer' },
  { id: 3, status: 'completed', text: 'connect components' },
];


const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <TodoList todos={dummyTodos} />
      <Footer />
    </section>
  )
}

export default App