import React, {Component} from 'react';
import UserCard from './components/UserCard'
import axios from 'axios';

const usersArray = ['jduell12', 'MaryamMosstoufi', 'sage-jordan', 'tsbarrett89', 'emilioramirezeguia', 'Roboblox'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: usersArray
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
  }

  render(){
    return (
      <div>
        {this.state.users.forEach(user => {
          return <UserCard user={user}/>
        })}
      </div>
    )
  }
}

export default App;
