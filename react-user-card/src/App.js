import React, {Component} from 'react';
import UserCard from './components/UserCard'
// import axios from 'axios';
import {data} from './githubData.mjs'

//const usersArray = ['jduell12', 'MaryamMosstoufi', 'sage-jordan', 'tsbarrett89', 'emilioramirezeguia', 'Roboblox'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      // users: usersArray
      users: ['octocat']
    };
  }

  componentDidMount(){
    // this.state.users.forEach(user => {
    //   console.log(user);
    //   axios.get(`https://api.github.com/users/${user}`)
    //   .then(res => {
    //     this.setState({
    //       users: [...this.state.users, res.data]
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // })
    this.state.users.forEach((user) => {
      this.setState({
        users: [ data[0]]
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        {
          this.state.users.forEach((user) => {
            if(user.id === undefined){
              return(<div>Please wait...</div>)
            } else {
              console.log("in else in App")
              return (<UserCard />)
            }

          })
        }
      </div>
    )
  }
}

export default App;
