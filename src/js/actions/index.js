import * as types from '../constants/ActionTypes';

export const addTodo = (text) => ({ type: types.ADD_TODO, text });

export const deleteTodo = (id) => ({ type: types.DELETE_TODO, id });

export const toggleTodo = (id) => ({ type: types.TOGGLE_TODO, id });

export const toggleAll = () => ({ type: types.TOGGLE_ALL });

export const editTodo = (id) => ({ type: types.EDIT_TODO, id });

export const changeTodo = (id, e) => ({ type: types.CHANGE_TODO, id, e });

export const submitTodo = (id) => ({ type: types.SUBMITTODO, id });

export const saveTodo = () => ({ type: types.SAVE_TODO });
