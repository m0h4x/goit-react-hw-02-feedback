import React from 'react';
import { List, Number } from './Statistics.styles';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <List className="stat-list">
        <li>
          Good: <Number>{good}</Number>
        </li>
        <li>
          Neutral: <Number>{neutral}</Number>
        </li>
        <li>
          Bad: <Number>{bad}</Number>
        </li>
      </List>

      <List className="count-list">
        <li className="total">
          Total: <Number>{total}</Number>
        </li>
        <li className="positive">
          Positive feedback: <Number>{positivePercentage}%</Number>
        </li>
      </List>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
