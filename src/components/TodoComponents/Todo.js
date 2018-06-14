import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <p>
      {props.todo.task}
      <button className="todo-remove-btn red" onClick={() => props.handleClearTodoById(props.todo.id)}>X</button>
    </p>
  );
};

export default Todo;
