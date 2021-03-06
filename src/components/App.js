import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onFeedbackClickHandler = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedback =
      this.countTotalFeedback() > 0
        ? (100 / this.countTotalFeedback()) * good
        : 0;
    return Math.round(positiveFeedback) + ' %';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onFeedbackClickHandler}
          />
        </Section>

        <Section title={'Statistics'}>
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
