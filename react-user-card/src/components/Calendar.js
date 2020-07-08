import React, {Component} from 'react';
import {StyledCal} from '../styles/UserCardStyles'

class Calendar extends Component{
    render(){
        return(
            <StyledCal>
                <p>Github Calendar</p>
                <img id="calendar" src={`https://ghchart.rshah.org/${this.props.user}` }alt="github calendar"/>
            </StyledCal>
        )
    }
}

export default Calendar;