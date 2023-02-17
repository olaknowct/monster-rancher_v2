// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(''); // returns [value, setValue function]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // Run once onmount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // Run Once, and rerun again when monsters or search field is different from previous state
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().startsWith(searchField));

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) =>
//     this.setState(() => {
//       return { monsters: users };
//     })
//   );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toUpperCase();
//     this.setState(
//       () => {
//         return { searchField };
//       },
//       () => console.log(this.state)
//     );
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => monster.name.toUpperCase().startsWith(searchField));

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rancher</h1>
//         <SearchBox className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
