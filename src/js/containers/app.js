import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableTodoList = SortableContainer(TodoList)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
        todos: arrayMove(this.state.todos, oldIndex, newIndex)
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    })
  }

  render() {
    const { todos } = this.state
    const { actions } = this.props
    console.log(actions);

    return (
    <section className="todoapp">
      <header className="header">
        <h1>todo list</h1>
        <AddTodo addTodo={actions.addTodo} />
      </header>
      <SortableTodoList todos={todos} deleteTodo={actions.deleteTodo}
        toggleTodo={actions.toggleTodo} toggleAll={actions.toggleAll}
        editTodo={actions.editTodo} changeTodo={actions.changeTodo}
        submitTodo={actions.submitTodo}
        saveTodo={actions.saveTodo}
        onSortEnd={this.onSortEnd}
      />
    </section>
  );
  }
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
