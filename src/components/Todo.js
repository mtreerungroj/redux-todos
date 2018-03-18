import React from 'react'

const Todo = ({ text, completed, toggleTodo }) => (
  <li
    onClick={toggleTodo}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
)

export default Todo
