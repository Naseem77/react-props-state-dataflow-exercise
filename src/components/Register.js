import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      <h2>Register</h2>
      {this.props.reservations.map(r => { return <div key={r.name}>{r.day} @ {r.time}</div> })}
    </div>)
  }
}

export default Register