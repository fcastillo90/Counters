import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const EchoLoader = (props) => {
  const { className, size, color, verticalAlign } = props;
  const classes = styles({ size, color, verticalAlign })();
  return (
    <div className={className}>
      <div className={classes.wrapper}>
        <div className={classes.firstBall} />
        <div className={classes.secondBall} />
      </div>
    </div>
  );
};

export default EchoLoader;

EchoLoader.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  verticalAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
EchoLoader.defaultProps = {
  color: '#000',
  className: '',
  size: 60,
  verticalAlign: 60,
};
