import { makeStyles } from '@material-ui/core/styles';

const getSize = (size) => (typeof size === 'number' ? `${size}px` : size);

const styles = ({ size, color, verticalAlign }) =>
  makeStyles({
    '@keyframes animation': {
      from: {
        transform: 'scale(0.1)',
      },
      '50%': {
        transform: 'scale(1.0)',
      },
      to: {
        transform: 'scale(0.1)',
      },
    },
    wrapper: {
      width: getSize(size),
      height: getSize(size),
      position: 'relative',
      border: '0px solid transparent',
    },
    firstBall: {
      backgroundColor: color,
      width: getSize(size),
      height: getSize(size),
      borderRadius: '100%',
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      left: 0,
      verticalAlign: getSize(verticalAlign),
      animation: `$animation 2s 1s infinite ease-in-out`,
      'animation-fill-mode': 'both',
      border: '0px solid transparent',
    },
    secondBall: {
      backgroundColor: color,
      width: getSize(size),
      height: getSize(size),
      borderRadius: '100%',
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      left: 0,
      verticalAlign: getSize(verticalAlign),
      animation: `$animation 2s 0s infinite ease-in-out`,
      'animation-fill-mode': 'both',
      border: '0px solid transparent',
    },
  });
export default styles;
