import React from 'react'

const Todo = ({todo, deleteTodo, toggleTodo, changeTodo,
  moveTodoUp, moveTodoDown, showUp, showDown}) => {
  const {id, status, text} = todo
  const completed = status === 'completed'

  return (
    <li className={completed ? 'completed' : ''} id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} type="checkbox" onChange={() => {toggleTodo(id)}}/>
        <input className="todo-text" type="text" value={text} onChange={(e) => {changeTodo(id, e)}}/>
        {showUp ? <button className="move up" onClick={() => {moveTodoUp(id)}}></button> : null }
        {showDown ? <button className="move down" onClick={() => {moveTodoDown(id)}}></button> : null }
        <button className="destroy" onClick={() => {deleteTodo(id)}}></button>
      </div>
      <input className="edit" value={text} onChange={() => {}} />
    </li>
  )
}

export default Todo