import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [
      {
        id: 1,
        task: 'Organize Garage',
        completed: false
      },
      {
        id: 2,
        task: 'Bake Cookies',
        completed: false
      },
      {
        id: 3,
        task: 'Practice Saxophone',
        completed: false
      }
    ]
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
