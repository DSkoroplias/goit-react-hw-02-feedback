import { Component } from 'react';
import styles from './styles/styles.module.sfecss';
import PropTypes from 'prop-types';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics ';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const btnOptions = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  onLeaveFeedback = propName => {
    this.setState(prevState => {
      return { [propName]: prevState[propName] + 1 };
    });
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage('good');

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default App;
