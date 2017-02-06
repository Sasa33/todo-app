import React from 'react'

const Todo = ({todo, deleteTodo, toggleTodo, changeTodo}) => {
  console.log(todo);
  const {id, status, text} = todo
  return (
    <li className="" id={id}>
      <div className="view">
        <input className={[status, 'toggle'].join(' ')} type="checkbox" onChange={() => {toggleTodo(id)}}/>
        <input className="todo-text" type="text" value={text} onChange={(e) => {changeTodo(id, e)}}/>
        <button className="destroy" onClick={() => {deleteTodo(id)}}></button>
      </div>
      <input className="edit" value={text} onChange={() => {}} />
    </li>
  )
}

export default Todo