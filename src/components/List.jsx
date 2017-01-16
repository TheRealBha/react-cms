import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            value: [
                {
                    id: 1,
                    title: 'test',
                    body: 'test-paragraph'
                },
                {
                    id: 2,
                    title: 'test2',
                    body: 'test-paragraph2'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>Notifications</h2>
                <div>
                    <ul>
                        <ListItem list={this.state.value}/>
                    </ul>
                </div>
            </div>
        );
    }
}
