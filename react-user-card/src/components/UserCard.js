import React, {Component} from 'react';
// import UserData from './UserData'
import {StyledCard} from '../styles/UserCardStyles'

class UserCard extends Component{

    render(){
        return(
            <StyledCard>
                {console.log(this.props.users)}                
            </StyledCard>
        )
    }

}

export default UserCard;