// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toUpperCase().startsWith(this.state.searchField));

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={(e) => {
            const searchField = e.target.value.toUpperCase();
            this.setState(
              () => {
                return { searchField };
              },
              () => console.log(this.state)
            );
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
