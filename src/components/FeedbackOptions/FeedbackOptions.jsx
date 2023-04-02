// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from 'components/Box/Box';

const FeedbackOptions =({options = [], onLeaveFeedback})=> {
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        mx="auto"
        my={4}
        width={2}
      >
        {options.map(btn => {
          return (
            <Button
              key={btn}
              type="button"
              value={btn}
              onClick={event => {onLeaveFeedback(event);
              }}
            >
              {btn}
            </Button>
          );
        })}
      </Box>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
