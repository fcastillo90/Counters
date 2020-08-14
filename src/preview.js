import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button, Chip } from '@material-ui/core';
import { EchoLoader } from './components/Loader';
import theme from './utils/palette';
import { Logo } from './components/Icon';
import { Picker } from './components/Picker';
import { SearchInput, Input } from './components/Input';
import { MessageDialog } from './components/Dialog';

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
        <Input
          placeholder="Search Counters"
          value={input}
          setValue={setInput}
        />
        <Button variant="contained" color="primary">
          Action
        </Button>
        <Button variant="contained" color="default">
          Action
        </Button>
        <Chip label="Cups of coffee" />
        <MessageDialog
          open
          handleClose={() => {}}
          title="Alert title"
          message="Alert message"
          firstButtonLabel="Action"
          firstButtonAction={() => {}}
          // secondButtonLabel={}
          // secondButtonAction={}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
