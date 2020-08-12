import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { EchoLoader } from './components/Loader';
import theme from './utils/palette';
import { Logo } from './components/Icon';
import { Picker } from './components/Picker';
import { SearchInput } from './components/Input';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const [active, setActive] = useState(false);
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hello, Cornershop!</h1>
        <EchoLoader />
        <Logo style={{ fontSize: 114 }} />
        <Picker
          label="Prueba"
          number={number}
          onRemove={() => setNumber(number - 1)}
          onAdd={() => setNumber(number + 1)}
          active={active}
          onSelect={() => setActive(!active)}
        />
        <SearchInput
          placeholder="Search Counters"
          value={input}
          setValue={setInput}
        />
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
