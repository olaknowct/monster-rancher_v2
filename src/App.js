// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  onSearchChange = (e) => {
    const searchField = e.target.value.toUpperCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => monster.name.toUpperCase().startsWith(searchField));

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rancher</h1>
        <SearchBox className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
