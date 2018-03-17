import React, { Component } from 'react'
import TodoList from '../components/TodoList'

class VisibleTodoList extends Component {
  todos = [{ id: 1, text: 'foo' }, { id: 2, text: 'bar' }]

  render () {
    return <TodoList todos={this.todos} />
  }
}

export default VisibleTodoList
