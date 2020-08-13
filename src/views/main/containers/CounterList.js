import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { counterListStyles } from '../styles';
import BottomAppBar from '../components/BottomAppBar';
import { SearchInput } from '../../../components/Input';
import { PageLoader } from '../../../components/Loader';

const CounterList = () => {
  const classes = counterListStyles();
  const [input, setInput] = useState('');
  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <SearchInput
          placeholder="Search Counters"
          value={input}
          setValue={setInput}
        />
        {/* <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        /> */}
        <PageLoader />
      </Container>
      <BottomAppBar onAdd={() => {}} />
    </>
  );
};

export default CounterList;
