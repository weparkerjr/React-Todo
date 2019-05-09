// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

export class TodoList extends Component {
  render() {
    return (
      <div>
        <p> { this.props.todo.task } </p>
      </div>
    )
  }
}

export default TodoList
