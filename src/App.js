import React, {Component} from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchFeild : ''
    };
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monsters : user}));
  }
  handleChange = e => {
    this.setState({searchFeild : e.target.value})
  }
  render(){ 
    const { monsters , searchFeild } = this.state;
    const filteredMonster = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monster Project</h1>
         <SearchBox 
          placeholder="search monster" 
          handleChange={this.handleChange}
         />
        <CardList monsters={filteredMonster} />
       
      </div>
    );
  }
}


export default App;
