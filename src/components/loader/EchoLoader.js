import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const EchoLoader = (props) => {
  const { className, size } = props;
  const classes = styles({ size })();
  return (
    <div className={className}>
      <div className={classes.wrapper}>
        <div className={classes.firstBall} />
        <div className={classes.secondBall} />
        <div className={classes.thirdBall} />
      </div>
    </div>
  );
};

export default EchoLoader;

EchoLoader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
EchoLoader.defaultProps = {
  className: '',
  size: 114,
};
