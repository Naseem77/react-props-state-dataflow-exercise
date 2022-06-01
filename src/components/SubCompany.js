import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.revenue}</div>
      </div>
    )

  }
}

export default SubCompany