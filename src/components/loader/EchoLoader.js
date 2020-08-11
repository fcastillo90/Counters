import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const EchoLoader = ({ size }) => {
  const classes = styles({ size })();
  return (
    <div className={classes.wrapper}>
      <div className={classes.firstBall} />
      <div className={classes.secondBall} />
      <div className={classes.thirdBall} />
    </div>
  );
};

export default EchoLoader;

EchoLoader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
EchoLoader.defaultProps = {
  size: 114,
};
