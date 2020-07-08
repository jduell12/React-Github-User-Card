import React, {Component} from 'react';

class Calendar extends Component{
    render(){
        return(
            <div>
                <p>Github Calendar</p>
                <img src={`https://ghchart.rshah.org/${this.props.user}` }alt="github calendar"/>
            </div>
        )
    }
}

export default Calendar;