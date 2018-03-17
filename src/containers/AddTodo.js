import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddTodo extends Component {
  submitTodo = e => {
    e.preventDefault()
    if (!this.input.value.trim()) return
    console.log(this.input.value)
    this.input.value = ''
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <input ref={node => (this.input = node)} />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
