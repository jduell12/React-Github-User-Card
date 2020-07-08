import React, {Component} from 'react';
import UserCard from './components/UserCard'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: 'jduell12',
      userData: {},
      userFollowers:[],
      input: ''
    };
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        userData: res.data
      })
    })
    .catch(err => {
      console.log(err);
    });
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => {
      this.setState({
        userFollowers: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  getUser(){

  }

  handleChanges = event => {
    this.setState({
      input: event.target.value,
      user: event.target.value
    })
  }

  render(){
    if(this.state.userData.length === 0){
      return (<p>Loading Cards...</p>)
    } else {
      return (
        <div className="App">
          <h1>Github User Cards</h1>
          <label htmlFor="userInput">
            Search for a github user: &nbsp;
            <input 
              type="text" 
              id="userInput"
              value={this.state.input}
              onChange={this.handleChanges}
            />
          </label>
          <button onClick={this.getUser}>Search</button>
          <UserCard userInfo={this.state.userData} followers={this.state.userFollowers}/>
        </div>
      )
    }
  }
}

export default App;
