import pureSwap from 'pure-swap';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_ALL, EDIT_TODO, CHANGE_TODO,
  SUBMITTODO, SAVE_TODO, TIME_REMINDER } from '../constants/ActionTypes';

const initialState = [
  { id: 0, status: 'completed', editing: false, settingTime: false, text: 'make components', time: '12' },
  { id: 1, status: 'completed', editing: false, settingTime: false, text: 'design actions', time: '12' },
  { id: 2, status: 'completed', editing: false, settingTime: false, text: 'implement reducer', time: '12' },
  { id: 3, status: 'completed', editing: false, settingTime: false, text: 'connect components', time: '12' },
  { id: 4, status: 'active', editing: false, settingTime: false, text: 'add local storage feature', time: '12' },
];

const storage = localStorage.getItem('todos');
const initialTodos = storage !== null ? JSON.parse(storage) : initialState;


export default function todos(state = initialTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          status: 'active',
          editing: false,
          text: action.text
        },
        ...state
      ];

    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          status: todo.status === 'completed' ? 'active' : 'completed'
        });
      });

    case TOGGLE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, {
          status: todo.status === 'completed' ? 'active' : 'completed'
        });
      });

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          editing: true
        });
      });

    case CHANGE_TODO:
      const targetValue = action.e.target.value;
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        if (action.field == "text") {
          return Object.assign({}, todo, {
            text: targetValue
          });
        }
        return Object.assign({}, todo, {
            time: targetValue
          });  
      });

    case SUBMITTODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          editing: false,
          settingTime: false,
        });
      });

    case SAVE_TODO:
      localStorage.setItem('todos', JSON.stringify(state));
      return state;

    case TIME_REMINDER:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          settingTime: true
        });
      });

    default:
      return state;
  }
}
