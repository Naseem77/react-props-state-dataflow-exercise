import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{Math.floor(this.props.price)}</div>
            </div>
        )

    }
}

export default Item