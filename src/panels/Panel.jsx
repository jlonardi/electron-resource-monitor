import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/panel.scss';

const Panel = ({ children, label }) => (
  <div className={styles.container}>
    <div className={styles.label}>{label}</div>
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Panel;

