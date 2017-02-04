import * as types from '../constants/ActionTypes'

export const addTodo = (text) => ({ type: types.ADD_TODO, text })

export const destoryItem = (id) => ({type: types.DESTORY_ITEM, id})