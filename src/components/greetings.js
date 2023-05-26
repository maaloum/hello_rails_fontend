import React from 'react';
import PropTypes from 'prop-types';

const Greetings = ({ greetings }) => (
  <div>
    <h1>All Greeetings</h1>
    {greetings.map((item) => (
      <p key={item.id}>{item.message}</p>
    ))}
  </div>
);

Greetings.propTypes = {
  greetings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Greetings;
