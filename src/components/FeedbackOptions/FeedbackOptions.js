import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((opt, i) => {
        return (
          <li key={opt}>
            <button type="button" onClick={onLeaveFeedback[i]}>
              {opt}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default FeedbackOptions;
