import React, {Component} from 'react';

class UserData extends Component {
    render(){
        return(
            <div className="data">
                <h1>{this.props.userData.name}</h1>
                <h2>{this.props.userData.login}</h2>
                <p>Location: {this.props.userData.location}</p>
                <p>Followers: {this.props.userData.followers}</p>
                <p>Following:{this.props.userData.following} </p>
                <p>Bio: {this.props.userData.bio}</p>
            </div>
        )
    }
}

export default UserData;