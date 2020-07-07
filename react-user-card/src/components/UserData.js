import React, {Component} from 'react';

class UserData extends Component {
    render(){
        return(
            <div>
                {console.log(this.props)}
                <h2>Username:</h2>
            </div>
        )
    }
}

export default UserData;