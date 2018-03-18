import React from 'react'

const Todo = ({ text, completed, toggleTodo, deleteTodo }) => (
  <li
    onClick={toggleTodo}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}{' '}
    <span onClick={deleteTodo}>{'X'}</span>
  </li>
)

export default Todo
