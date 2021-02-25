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

  onClickGoodHandler = () => {
    console.log('good');
    this.setState(prevState => {
      return { good: (prevState.good += 1) };
    });
  };

  onClickNeutralHandler = () => console.log('neutral');

  onClickBadHandler = () => console.log('bad');

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button onClick={this.onClickGoodHandler}>good</button>
          </li>
          <li>
            <button onClick={this.onClickNeutralHandler}>neutral</button>
          </li>
          <li>
            <button onClick={this.onClickBadHandler}>bad</button>
          </li>
        </ul>
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
