import * as types from '../constants/ActionTypes'

export const addTodo = (text) => ({ type: types.ADD_TODO, text })

export const deleteTodo = (id) => ({type: types.DELETE_TODO, id})

export const toggleTodo = (id) => ({type: types.TOGGLE_TODO, id})

export const toggleAll = (id) => ({type: types.TOGGLE_ALL, id})

export const changeTodo = (id, e) => ({type: types.CHANGE_TODO, id, e})