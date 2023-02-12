import { Component } from 'react';
import Statistics from './Statistics.jsx';
import FeedbackOption from './FeedbackOption.jsx';
import Section from './Section.jsx';
import Notification from './Notification.jsx';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVoteFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    const result = ((positive / total) * 100).toFixed();
    if (!total) {
      return 0;
    }
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback!">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleVoteFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          )}
        </Section>
      </div>
    );
  }
}
