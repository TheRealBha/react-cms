import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <div className="container">
              <List/>
          </div>
      </div>
    );
  }
}