// src/components/TodoItem.js
import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/todos/${todo.id}/`)
      .then(response => {
        console.log('Todo deleted successfully:', response.data);
        onDelete(); // Trigger the onDelete callback passed from TodoList
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  const handleUpdate = () => {
    const updatedTodo = {
      title: todo.title,
      description: todo.description,
      completed: !todo.completed,
    };

    axios
      .put(`http://localhost:8000/api/todos/${todo.id}/`, updatedTodo)
      .then(response => {
        console.log('Todo updated successfully:', response.data);
        onUpdate(response.data); // Trigger the onUpdate callback passed from TodoList
      })
      .catch(error => console.error('Error updating todo:', error));
  };

  return (
    <li>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
