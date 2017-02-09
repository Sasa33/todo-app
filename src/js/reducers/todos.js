import pureSwap from 'pure-swap';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_ALL, EDIT_TODO, CHANGE_TODO,
  SUBMITTODO, MOVE_UP, MOVE_DOWN } from '../constants/ActionTypes'

const initialState = [
  { id: 0, status: 'completed', editing: false, text: 'make components' },
  { id: 1, status: 'completed', editing: false, text: 'design actions' },
  { id: 2, status: 'completed', editing: false, text: 'implement reducer' },
  { id: 3, status: 'completed', editing: false, text: 'connect components' },
  { id: 4, status: 'active', editing: false, text: 'add local storage feature' },
]

export default function todos(state = initialState, action) {
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
      ]

    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id != action.id
      })

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          status: todo.status=='completed' ? 'active' : 'completed'
        })
      })

    case TOGGLE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, {
          status: todo.status=='completed' ? 'active' : 'completed'
        })
      })

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          editing: true
        })
      })

    case CHANGE_TODO:
      const targetValue = action.e.target.value;
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          text: targetValue
        })
      })

    case SUBMITTODO:
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          editing: false
        })
      })

    case MOVE_UP:
      const currentIndex = state.findIndex((todo, index) => {
        return todo.id == action.id
      })
      return pureSwap(state, currentIndex - 1, currentIndex);

    case MOVE_DOWN:
      const currentIndex2 = state.findIndex((todo, index) => {
        return todo.id == action.id
      })
      return pureSwap(state, currentIndex2, currentIndex2 + 1);

    default:
      return state
  }
}