import React, { Component } from 'react';

class Landing extends Component {


    render() {
        return (
            <div>Welcome,{this.props.user}. The Hottest item is: {this.props.store.item} for {this.props.store.price} </div>

        )

    }
}

export default Landing