import { useState } from 'react';
import Statistics from './Statistics.jsx';
import FeedbackOption from './FeedbackOption.jsx';
import Section from './Section.jsx';
import Notification from './Notification.jsx';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleVoteFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = good;
    const result = ((positive / total) * 100).toFixed();
    if (!total) {
      return 0;
    }
    return Number(result);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title="Please leave feedback!">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleVoteFeedback}
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
};

export default Feedback;
