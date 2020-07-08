import React, {Component} from 'react';
import UserData from './UserData'
import Followers from './Followers'
import Calendar from './Calendar'
import {StyledCard, StyledCal} from '../styles/UserCardStyles'

class UserCard extends Component{
    render(){
        return(
            <StyledCard>
                <img src={this.props.userInfo.avatar_url} alt=""/>
                <UserData userData={this.props.userInfo} />
                <Followers list={this.props.followers}/>
                <StyledCal>
                    <Calendar user={this.props.userInfo.login} />
                </StyledCal>
                
            </StyledCard>
        )
    }

}

export default UserCard;