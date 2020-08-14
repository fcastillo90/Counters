import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
  root: {
    height: '100%',
    padding: 42,
  },
  gridContainer: {
    height: '100%',
  },
  logo: {
    fontSize: 178,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '27px',
    color: '#000',
  },
  body: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: '23px',
    color: '#4A4A4A',
  },
}));
export const counterListStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 0,
  },
}));
export const footerAppBarStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    minHeight: 71,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    flex: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
}));
export const listStyles = makeStyles((theme) => ({
  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  typoItems: {
    fontWeight: 600,
    color: '#4a4a4a',
    fontSize: 17,
    lineHeight: '23px',
    letterSpacing: '0.02em',
    margin: '26px 7px 0px 25px',
  },
  typoTimes: {
    fontWeight: 500,
    color: '#888B90',
    fontSize: 17,
    lineHeight: '23px',
    letterSpacing: '0.02em',
    margin: '26px 7px 0px 0px',
  },
  typoRefresh: {
    color: theme.palette.primary.main,
  },
  rotate: {
    color: theme.palette.primary.main,
    '-webkit-animation': '$spin 2s linear infinite',
    '-moz-animation': '$spin 2s linear infinite',
    animation: '$spin 2s linear infinite',
  },
  replayIcon: {
    fontSize: 17,
    '-moz-transform': 'scale(-1, 1)',
    '-webkit-transform': 'scale(-1, 1)',
    '-o-transform': 'scale(-1, 1)',
    '-ms-transform': 'scale(-1, 1)',
    transform: 'scale(-1, 1)',
  },
}));
export default styles;
