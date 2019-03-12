import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'finish react app',
        completed: false
      },
      {
        id: 2,
        title: 'finish vue app',
        completed: false
      },
      {
        id: 3,
        title: 'set up deployment',
        completed: false
      },
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
