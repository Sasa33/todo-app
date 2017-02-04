import React from 'react'

const Todo = ({todo, deleteTodo}) => {
  const {id, status, text} = todo
  const completed = status === 'completed'

  return (
    <li className={completed ? 'completed' : ''} id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{text}</label>
        <button className="destroy" onClick={() => {deleteTodo(id)}}></button>
      </div>
      <input className="edit" value={text} onChange={() => {}} />
    </li>
  )
}

export default Todo