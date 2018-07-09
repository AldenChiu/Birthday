import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>Six 5s</div>
        <div>Two 4s</div>
        <div>One 3</div>
        <div className="grid__skew-light-one"> </div>
        <div className="grid__skew-light-two"> </div>
        <div className="grid__skew-light-three"> </div>
      </div>
    );
  }
}
