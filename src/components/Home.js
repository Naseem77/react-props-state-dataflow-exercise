import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {


    render() {
        return this.props.flag === true ? this.props.home.map(h => <Item name={h.item} price={h.price * (1 - h.discount)} key={h.item} />) : this.props.home.map(h => <Item name={h.item} price={h.price} key={h.item} />)
    }
}

export default Home