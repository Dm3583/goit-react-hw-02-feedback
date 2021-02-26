import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onClickNeutralHandler = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onClickBadHandler = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      this.countTotalFeedback() > 0
        ? (100 / this.countTotalFeedback()) * this.state.good
        : 0;
    return Math.round(positiveFeedback) + ' %';
  };

  render() {
    return (
      <div>
        {/* <h1>Please leave feedback</h1> */}

        {/* <ul>
          <li>
            <button onClick={this.onClickGoodHandler}>good</button>
          </li>
          <li>
            <button onClick={this.onClickNeutralHandler}>neutral</button>
          </li>
          <li>
            <button onClick={this.onClickBadHandler}>bad</button>
          </li>
          
        </ul> */}
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={[
              this.onClickGoodHandler,
              this.onClickNeutralHandler,
              this.onClickBadHandler,
            ]}
          />
        </Section>

        {/* <h2>Statistics</h2> */}
        <Section title={'Statistics'}>
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>

        {/* <ul>
          <li>good {this.state.good}</li>
          <li>neutral {this.state.neutral}</li>
          <li>bad {this.state.bad}</li>
          <li>total {this.countTotalFeedback()}</li>
          <li>Positive feedback {this.countPositiveFeedbackPercentage()}</li>
        </ul> */}
      </div>
    );
  }
}

export default App;
