import { makeStyles } from '@material-ui/core/styles';

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
  deleteButton: {
    fontSize: 24,
    width: 71,
    height: 41,
    marginRight: 18,
  },
  shareButton: {
    fontSize: 24,
    width: 71,
    height: 41,
  },
}));
export const listStyles = makeStyles((theme) => ({
  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 0,
  },
  typoItems: {
    fontWeight: 600,
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
  replayButton: {
    verticalAlign: 'sub',
  },
}));
