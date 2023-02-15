// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFilter: [],
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
    let { monsters, searchFilter } = this.state;

    if (searchFilter.length !== 0) monsters = searchFilter;

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={(e) => {
            let search = e.target.value;
            let searchFilter = this.state.monsters.filter((monster) => monster.name.toUpperCase().startsWith(search.toUpperCase()));
            this.setState(
              () => {
                return { searchFilter };
              },
              () => console.log(this.state)
            );
          }}
        />
        {monsters.map((monster) => {
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
