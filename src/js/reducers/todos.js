import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_ALL, CHANGE_TODO } from '../constants/ActionTypes'

const initialState = [
  { id: 0, status: 'completed', text: 'make components' },
  { id: 1, status: 'active', text: 'design actions' },
  { id: 2, status: 'active', text: 'implement reducer' },
  { id: 3, status: 'completed', text: 'connect components' },
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          status: 'active',
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
    default:
      return state
  }
}