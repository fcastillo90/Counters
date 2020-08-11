import { makeStyles } from '@material-ui/core/styles';

const getSize = (size) => (typeof size === 'number' ? `${size}px` : size);

const styles = ({ size }) =>
  makeStyles((theme) => ({
    '@keyframes animation': {
      from: {
        transform: 'scale(0.2)',
        opacity: 1,
      },
      to: {
        transform: 'scale(1.0)',
        opacity: 0,
      },
    },
    wrapper: {
      width: getSize(size),
      height: getSize(size),
      position: 'relative',
      border: '0px solid transparent',
    },
    firstBall: {
      backgroundColor: theme.palette.primary.main,
      width: getSize(size),
      height: getSize(size),
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      animation: `$animation 2s 0s infinite ease-out`,
      'animation-fill-mode': 'both',
      border: '0px solid transparent',
    },
    secondBall: {
      backgroundColor: theme.palette.primary.main,
      width: getSize(size),
      height: getSize(size),
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      animation: `$animation 2s 0.5s infinite ease-out`,
      'animation-fill-mode': 'both',
      border: '0px solid transparent',
    },
    thirdBall: {
      backgroundColor: theme.palette.primary.main,
      width: getSize(size),
      height: getSize(size),
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      animation: `$animation 2s 1s infinite ease-out`,
      'animation-fill-mode': 'both',
      border: '0px solid transparent',
    },
  }));
export default styles;
