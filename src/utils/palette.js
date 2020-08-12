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
    MuiButton: {
      root: {
        textTransform: 'unset',
        borderRadius: 8,
      },
      contained: {
        backgroundColor: '#FBFBFB',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      },
    },
    MuiInputBase: {
      input: {
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        color: '#888B90',
        height: 32,
        paddingTop: 9,
        paddingBottom: 7,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
        '&:hover $notchedOutline': {
          borderColor: 'transparent',
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        },
      },
      notchedOutline: {
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 1,
      },
    },
    PrivateNotchedOutline: {
      root: {
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 10,
      },
    },
  },
});
