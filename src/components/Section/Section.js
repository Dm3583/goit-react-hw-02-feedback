import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ title, children }) => {
  return (
    <div className="Section">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
