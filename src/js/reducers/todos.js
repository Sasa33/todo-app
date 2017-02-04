import { ADD_TODO, DELETE_TODO } from '../constants/ActionTypes'

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

    default:
      return state
  }
}