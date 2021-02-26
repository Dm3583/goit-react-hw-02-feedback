import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => {
  const statList = Object.entries(props);
  return (
    <ul>
      {statList.map(prop => {
        return (
          <li key={prop[0]}>
            {prop[0]}: {prop[1]}
          </li>
        );
      })}
      {/* <li>good {good}</li>
            <li>neutral {neutral}</li>
            <li>bad {bad}</li>
            <li>total {total}</li>
            <li>Positive feedback {positivePercentage}</li> */}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
