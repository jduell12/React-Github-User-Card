import React, {Component} from 'react';
import UserCard from './components/UserCard'
import axios from 'axios';

const usersArray = ['jduell12', 'MaryamMosstoufi', 'sage-jordan', 'tsbarrett89', 'emilioramirezeguia', 'Roboblox'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: usersArray,
      userData: []
    };
  }

  componentDidMount(){
    this.state.users.forEach(user => {
      console.log(user);
      axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({
          userData: [...this.state.userData, res.data]
        })
      })
      .catch(err => {
        console.log(err);
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
          {this.state.userData.map(user => (
            <UserCard key={user.id} userInfo={user}/>
          ))}
        </div>
      )
    }
  }
}

export default App;
