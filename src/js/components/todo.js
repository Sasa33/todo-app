import React from 'react';
import { DateField, DatePicker } from 'react-date-picker'
import moment from 'moment'
const Todo = ({ todo, deleteTodo, toggleTodo, editTodo, changeTodo,
  submitTodo, timeReminder, moveTodoUp, moveTodoDown, showUp, showDown }) => {
  const { id, status, editing, text, settingTime, time } = todo;
  const completed = status === 'completed';

  const onStartTodo = (todo, deadline) => {
    const { text } = todo;

    const now = new moment().valueOf();
    const duration = deadline - now;
    setTimeout(() => {
      let myNotification = new Notification('Todo', {
        body: text,
        icon: null
      })

      myNotification.onclick = () => {
        console.log('Notification clicked')
      }
    }, duration);
  }

  const handleChange = (dateString, { dateMoment, timestamp }) => {
    changeTodo(id, dateMoment.valueOf(), 'time')
    submitTodo(id)
    onStartTodo(todo, dateMoment.valueOf())
  }

  return (
    <li className={[completed ? 'completed' : '', editing ? 'editing' : '', settingTime ? 'settingTime' : ''].join(' ')} id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} type="checkbox" onChange={() => { toggleTodo(id); }} />
        <label onDoubleClick={() => { editTodo(id); }}>{text}</label>
        {showUp ? <button className="move up" onClick={() => { moveTodoUp(id); }}></button> : null}
        {showDown ? <button className="move down" onClick={() => { moveTodoDown(id); }}></button> : null}
        <button className="timeReminder" onClick={() => { timeReminder(id);}}></button>
        <button className="destroy" onClick={() => { deleteTodo(id); }}></button>
      </div>
      <input className="edit" value={text}
        onChange={(e) => { changeTodo(id, e.target.value, 'text'); }}
        onBlur={() => { submitTodo(id); }}
        onKeyDown={(e) => { if (e.which === 13) { submitTodo(id); } }}
      />
      <div className="setTimeReminder">
        <DateField
          forceValidDate
          defaultValue={new moment()}
          dateFormat="YYYY-MM-DD HH:mm:ss"
          onChange={handleChange}
        />
      </div>
    </li>
  );
};

export default Todo;

