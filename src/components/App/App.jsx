import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import NotifyNoFeedback from 'components/Notification/NotifyNoFeedback';
import Statistics from '../Statistics/Statistics';
import { Box } from 'components/Box/Box';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const currentButtonValue = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentButtonValue]: prevState[currentButtonValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statValues = Object.values(this.state);
    return statValues.reduce((prevValue, item) => {
      return (prevValue += item);
    }, 0);
  };
  countPositiveRatio = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return Math.round((good / total) * 100);
  };

  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <Box mx="auto" my={0} px="0" py={5} bg="container">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() === 0 && (
            <NotifyNoFeedback message="There is no feedback so far" />
          )}
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Feedback Statistics">
            <Statistics
              stat={this.state}
              total={this.countTotalFeedback()}
              positiveRatio={this.countPositiveRatio()}
            />
          </Section>
        )}
      </Box>
    );
  }
}
export default App;
