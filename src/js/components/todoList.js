import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import Todo from './todo';
import Footer from './footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/FilterTypes';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableTodo = SortableElement(Todo);

const filters = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.status === 'completed',
  [SHOW_ACTIVE]: todo => todo.status === 'active',
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: SHOW_ALL
    };
  }

  componentDidMount() {
    const { saveTodo } = this.props;
    ipcRenderer.on('saveTodos', (event, data) => {
      saveTodo();
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('saveTodos', () => {});
  }


  handleFilterChange(filter) {
    this.setState({ filter });
  }

  render() {
    const { todos, deleteTodo, toggleTodo, toggleAll, editTodo,
            changeTodo, submitTodo, timeReminder } = this.props;
    const { filter } = this.state;
    const filteredTodos = todos.filter(filters[filter]);
    const activeCount = todos.reduce((count, todo) => {
      return todo.status === 'active' ? count + 1 : count;
    }, 0);

    return (
      <div className="main">
        <input className="toggle-all" type="checkbox" onChange={() => toggleAll()} />
        <ul className="todo-list">
          {
            filteredTodos.map((todo, index) => <SortableTodo todo={todo}
              key={`item-${index}`} index={index}
              deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}
              changeTodo={changeTodo} submitTodo={submitTodo} timeReminder={timeReminder}
            />)
          }
        </ul>
        <Footer filter={filter}
          activeCount={activeCount}
          onFilterChange={this.handleFilterChange.bind(this)}
        />
      </div>
    );
  }
}

export default TodoList;
