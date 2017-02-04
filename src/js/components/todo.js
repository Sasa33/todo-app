import React from 'react'

const Todo = ({todo, destoryItem}) => {
  console.log(todo);
  const {id, status, text} = todo
  return (
    <li className="" id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{text}</label>
        <button className="destroy" onClick={() => {destoryItem(id)}}></button>
      </div>
      <input className="edit" value={text} onChange={() => {}} />
    </li>
  )
}

export default Todo