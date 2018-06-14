import React from 'react';

const TodoHeader = props => {
  return (
    <div className="todo-header">
      <h1>{props.value}</h1>
    </div>
  );
};

export default TodoHeader;
