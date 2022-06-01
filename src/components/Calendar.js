import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <h2>Calendar</h2>
        {this.props.reservations.map(r => { return <div key={r.name}>{r.name} has a reservation on {r.day} @ {r.time}</div> })}

      </div>
    )
  }
}

export default Calendar