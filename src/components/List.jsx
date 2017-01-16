import React, { Component } from 'react';
// import ListItem from './ListItem';

const testList = [
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
];

function MyList(props) {
    const list = props.value;
    const listItems = list.map((item, i) =>
        <li key={i}>{item.id} {item.title} {item.body}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
export default class List extends Component {
    render() {
        return (
            <div>
                <h2>Notifications</h2>
                <div>
                    <MyList value={testList} />
                </div>
            </div>
        );
    }
}

