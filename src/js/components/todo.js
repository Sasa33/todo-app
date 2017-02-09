import React from 'react'

const Todo = ({todo, deleteTodo, toggleTodo, editTodo, changeTodo,
  submitTodo, moveTodoUp, moveTodoDown, showUp, showDown}) => {
  const {id, status, editing, text} = todo
  const completed = status === 'completed'

  return (
    <li className={[completed ? 'completed' : '', editing ? 'editing' : ''].join(' ')} id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} type="checkbox" onChange={() => {toggleTodo(id)}}/>
        <label onDoubleClick={() => {editTodo(id)}}>{text}</label>
        {showUp ? <button className="move up" onClick={() => {moveTodoUp(id)}}></button> : null }
        {showDown ? <button className="move down" onClick={() => {moveTodoDown(id)}}></button> : null }
        <button className="destroy" onClick={() => {deleteTodo(id)}}></button>
      </div>
      <input className="edit" value={text} 
      onChange={(e) => {changeTodo(id, e)}} 
      onBlur={() => {submitTodo(id)}} 
      onKeyDown={(e) => {if(e.which===13) {submitTodo(id)}}} />
    </li>
  )
}

export default Todo