import React from 'react';
import TodoList from './TodoList';

class Todos extends React.Component {
  render() {
    //   console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
    ));
  }
}

export default Todos;
