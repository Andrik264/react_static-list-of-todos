import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const preparedTodos = todos.map((todo) => {
    const preparedTodo = { ...todo };

    preparedTodo.user = users.find(user => user.id === todo.userId);

    return preparedTodo;
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;