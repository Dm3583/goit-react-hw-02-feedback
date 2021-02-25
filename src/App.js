import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>good {this.state.good}</li>
          <li>neutral {this.state.neutral}</li>
          <li>bad {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default App;
