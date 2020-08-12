import { createMuiTheme } from '@material-ui/core/styles';
import AvenirNext from './fonts/Metropolis-Regular.otf';

const avenirNext = {
  fontFamily: 'Avenir Next',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Avenir Next'),
    local('Avenir Next-Regular'),
    url(${AvenirNext}) format('otf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FF9500',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF3B30',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: 17,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [avenirNext],
      },
    },
  },
});
