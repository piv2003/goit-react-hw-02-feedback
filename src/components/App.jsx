import React, { Component } from 'react';
import { FeedbackOptions } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevValue => {
      switch (evt.target.textContent) {
        case 'Good':
          return { good: prevValue.good + 1 };

        case 'Neutral':
          return { neutral: prevValue.neutral + 1 };

        case 'Bad':
          return { bad: prevValue.bad + 1 };

        default:
          console.log('Something wrong');
          return;
      }
    });
  };
  countTotalFeedback = () => {
    const arrFeedback = Object.values(this.state);
    const sumFeedback = arrFeedback.reduce((sum, elem) => sum + elem, 0);
    return sumFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = (this.state.good / this.countTotalFeedback()) * 100;

    if (this.countTotalFeedback() <= 0) {
      return 100;
    }
    return Math.round(totalFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
