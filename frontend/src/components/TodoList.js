import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'


const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/todos/')
    .then(response=> setTodos(response.data))
    .catch(error=>console.error('Error fetching data',error))
  })

  const handleDelete=(id)=>{
    setTodos(prevTodos=> prevTodos.filter(todo=>todo.id !== id))
  }

  const handleUpdate=(updatedTodo)=>{
    setTodos(prevTodos=> prevTodos.map(todo=>(todo.id===updatedTodo.id ? updatedTodo:todo)))
  }

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map(todo=>(
          <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          onUpdate={handleUpdate}
          />
         
        ))}
      </ul>
    </div>
  )
}

export default TodoList