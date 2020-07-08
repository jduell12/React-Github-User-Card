import React, {Component} from 'react';
import {StyledData} from '../styles/UserCardStyles'

class UserData extends Component {
    render(){
        return(
            <StyledData className="data">
                <h1>Name: {this.props.userData.name}</h1>
                <h2>Username: {this.props.userData.login}</h2>
                <p>Location: {this.props.userData.location}</p>
                <p>Followers: {this.props.userData.followers}</p>
                <p>Following:{this.props.userData.following} </p>
                <p>Bio: {this.props.userData.bio}</p>
            </StyledData>
        )
    }
}

export default UserData;