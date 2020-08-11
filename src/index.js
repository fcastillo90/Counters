import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { EchoLoader } from './components/loader';
import theme from './utils/palette';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hello, Cornershop!</h1>
        <EchoLoader />
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
