import React from 'react';
import './TodoPage.css';

import TodoApp from '../../components/TodoApp/TodoApp';

const TodoPage = () => (
  <div className="todo-page">
    <h2 className="todo-header">Todo List</h2>
    <TodoApp />
  </div>
);



export default TodoPage;
