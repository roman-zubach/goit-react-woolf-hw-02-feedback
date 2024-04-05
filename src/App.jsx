import { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0, neutral: 0, bad: 0,
  };

  updateState = ({ target }) => {
    const name = target.id;

    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    const positivePercentage = Math.ceil(good / total * 100);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onClick={this.updateState} />
        </Section>

        <Section title={'Statistics'}>
          {total === 0
            ? <Notification />
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          }
        </Section>
      </div>
    );
  }
}

export default App;
