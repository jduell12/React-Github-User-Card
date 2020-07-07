import React, {Component} from 'react';

class UserData extends Component {
    render(){
        return(
            <div>
                {/* {console.log(this.props.userData)} */}
                <h2>Username: {this.props.userData.login}</h2>
            </div>
        )
    }
}

export default UserData;