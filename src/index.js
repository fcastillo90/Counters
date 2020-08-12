import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { EchoLoader } from './components/Loader';
import theme from './utils/palette';
import { Logo } from './components/Icon';
import { Picker } from './components/Picker';

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
        <Picker label="Prueba" number={1} active />
        <Logo style={{ fontSize: 114 }} />
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
