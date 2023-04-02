import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from 'components/Box/Box';
class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  render() {
    const buttons = this.props.options;
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        mx="auto"
        my={4}
        width={2}
      >
        {buttons.map(btn => {
          return (
            <Button
              key={btn}
              type="button"
              value={btn}
              onClick={event => {
                this.props.onLeaveFeedback(event);
              }}
            >
              {btn}
            </Button>
          );
        })}
      </Box>
    );
  }
}
export default FeedbackOptions;
