import React, {Component} from 'react';

class UserCard extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div>
                <h2>{this.props}</h2>
            </div>
        )
    }

}

export default UserCard;