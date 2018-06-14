import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoHeader from './components/TodoComponents/TodoHeader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Build a todo task',
          id: 1528931270226,
          completed: false
        },
        {
          task: 'Interview',
          id: 1528931260100,
          completed: false
        }
      ],
      todo: ''
    };
  }
  
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  // Remove TODO task by id
  // This will be called from the Todo component (Todo.js)
  clearTodoById = id => {
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="main">
        <TodoHeader
          value="ToDo:"
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
        />
        <TodoList
          handleClearTodoById={this.clearTodoById}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
