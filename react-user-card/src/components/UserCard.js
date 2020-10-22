import React, {Component} from 'react';
import UserData from './UserData'
import Followers from './Followers'
import Calendar from './Calendar'
import {StyledCard, StyledTop} from '../styles/UserCardStyles'

class UserCard extends Component{
    render(){
        return(
            <StyledCard>
                <StyledTop>
                    <img src={this.props.userInfo.avatar_url} alt=""/>
                    <UserData userData={this.props.userInfo} />
                    <Followers list={this.props.followers}/>
                </StyledTop>
                <Calendar user={this.props.userInfo.login} />
            </StyledCard>
        )
    }

}

export default UserCard;