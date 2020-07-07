import React, {Component} from 'react';
import {StyledCard} from '../styles/UserCardStyles'

class UserCard extends Component{

    render(){
        return(
            <StyledCard>
                <h2>Card</h2>
                {console.log(this.props)}
            </StyledCard>
        )
    }

}

export default UserCard;