import React from 'react';
import PropTypes from 'prop-types';
import { Button, Options } from './FeedbackOptions.styles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Options>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </Options>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
