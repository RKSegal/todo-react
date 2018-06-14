import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Any task?"
      />
      <button className="btn-add blue" onClick={props.handleAddTodo}>Add</button>
    </form>
  );
};

export default TodoForm;
