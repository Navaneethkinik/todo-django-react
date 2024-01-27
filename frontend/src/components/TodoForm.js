import React, { useState } from 'react'
import axios from 'axios'

const TodoForm = () => {
    const [ newTodo, setNewTodo] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)

    const handleAddTodo=()=>{
        axios.post('http://localhost:8000/api/todos/', { title: newTodo, description, completed })
      .then(response => {
        console.log('Todo added successfully:', response.data);
      })
      .catch(error => console.error('Error adding todo:', error));
    }

  return (
    <div>
        <input type='text' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input type="checkbox" value={completed} onChange={(e)=>setCompleted(!completed)}/>

        <button onClick={handleAddTodo} placeholder='Add your task'>Add</button>
    </div>
  )
}

export default TodoForm