import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptions">
      {options.map(opt => {
        return (
          <li className="FeedbackOptions__item" key={opt}>
            <button
              className="FeedbackOptions__button"
              type="button"
              onClick={() => onLeaveFeedback(opt)}
            >
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
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
