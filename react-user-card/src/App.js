import React, {Component} from 'react';
import UserCard from './components/UserCard'
// import axios from 'axios';
import {data} from './githubData.mjs'

const usersArray = ['octocat','jduell12', 'MaryamMosstoufi', 'sage-jordan', 'tsbarrett89', 'emilioramirezeguia', 'Roboblox'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      // users: usersArray
      users: usersArray,
      userData: []
    };
  }

  componentDidMount(){
    // this.state.users.forEach(user => {
    //   console.log(user);
    //   axios.get(`https://api.github.com/users/${user}`)
    //   .then(res => {
    //     this.setState({
    //       userData: [...this.state.userData, res.data]
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // })
    this.state.users.forEach((user) => {
      console.log(user)
      this.setState({
        userData: [ user]
      })
    })
  }

  render(){
    if(this.state.userData.length === 0){
      return (<p>Loading Cards...</p>)
    } else {
      return (
        <div className="App">
          <h1>Github User Cards</h1>
          <UserCard users={this.state.userData} />
        </div>
      )
    }
  }
}

export default App;
