import React from 'react';

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo, changeTodo,
  submitTodo, timeReminder }) => {
  const { id, status, editing, text, settingTime, time } = todo;
  const completed = status === 'completed';
  return (
    <li className={[completed ? 'completed' : '', editing ? 'editing' : '', settingTime ? 'settingTime' : ''].join(' ')} id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} type="checkbox" onChange={() => { toggleTodo(id); }} />
        <label onDoubleClick={() => { editTodo(id); }}>{text}</label>
        <button className="timeReminder" onClick={() => { timeReminder(id);}}></button>
        <button className="destroy" onClick={() => { deleteTodo(id); }}></button> 
        <label> {time} </label>
      </div>
      <input className="edit" value={text}
        onChange={(e) => { changeTodo(id, e, 'text'); }}
        onBlur={() => { submitTodo(id); }}
        onKeyDown={(e) => { if (e.which === 13) { submitTodo(id); } }}
      />
      <div className="setTimeReminder">
        <label>{text}</label>
        <input className="time" 
          onChange={(e) => { changeTodo(id, e, 'time') }}
          onBlur={() => { submitTodo(id); }}
          onKeyDown={(e) => { if (e.which === 13) { submitTodo(id); } }}
        />
      </div>
    </li>
  );
};

export default Todo;

     