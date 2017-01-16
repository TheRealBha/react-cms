import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    render() {
        return (this.props.list.map((item, i)=> {
            return <li key={i}> {item} </li>
            })
        );
    }
}
