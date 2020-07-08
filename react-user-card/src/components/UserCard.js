import React, {Component} from 'react';
import UserData from './UserData'
import UserImg from './UserImg'
import {StyledCard} from '../styles/UserCardStyles'

class UserCard extends Component{

    render(){
        return(
            <StyledCard>
                {/* {console.log(this.props.userInfo)}   */}
                <img src={this.props.userInfo.avatar_url} alt=""/>
                <UserData userData={this.props.userInfo} />
            </StyledCard>
        )
    }

}

export default UserCard;