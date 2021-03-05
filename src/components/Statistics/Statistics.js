import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.scss';

const Statistics = props => {
  const statList = Object.entries(props);
  return (
    <ul className="Statistics">
      {statList.map(([key, value]) => {
        return (
          <li className="Statistics__item" key={key}>
            {
              (key =
                key === 'positivePercentage'
                  ? `Positive feedback`
                  : key[0].toUpperCase() + key.slice(1))
            }
            : {value}
          </li>
        );
      })}
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
