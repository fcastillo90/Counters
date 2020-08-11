import React from 'react';
import ReactDOM from 'react-dom';
import { EchoLoader } from './components/loader';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <>
      <h1>Hello, Cornershop!</h1>
      <EchoLoader />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
