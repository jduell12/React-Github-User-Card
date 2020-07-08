import React, {Component} from 'react';

class Followers extends Component{

    render(){
        if(this.props.list=== undefined){
            return (
                <div>
                    <h3>Followers: 0</h3>
                </div>
            )
        } else {
            return(
                <div>
                    <h3>Followers:</h3>
                    <ul>
                        {this.props.list.map(follower=>{
                            return <li key={follower.id}>{follower.login}</li>
                        })}
                    </ul>
                </div>
                )
        }
    }
}

export default Followers;