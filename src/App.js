import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [{ name: 'linda' }, { name: 'frank' }, { name: 'jacky' }] };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
