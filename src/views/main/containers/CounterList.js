import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { counterListStyles } from '../styles';
import BottomAppBar from '../components/BottomAppBar';
import { SearchInput } from '../../../components/Input';
import { PageLoader } from '../../../components/Loader';
import {
  onGetCounterList,
  onPostCounterSave,
  onPostIncCounter,
  onPostDecCounter,
} from '../model';
import DataList from '../components/DataList';
import CreateDialog from '../../../components/Dialog/CreateDialog';
import ListHeader from '../components/ListHeader';
import MessageDialog from '../../../components/Dialog/MessageDialog';

const INIT_STATE = {
  data: [],
  isFetching: false,
  selected: [],
};
const INIT_DIALOG_STATE = {
  dialog: false,
  title: '',
  message: '',
  firstButtonLabel: false,
  firstButtonAction: false,
  secondButtonLabel: false,
  secondButtonAction: false,
};

const CounterList = () => {
  const classes = counterListStyles();
  const [state, setState] = useState(INIT_STATE);
  const [input, setInput] = useState('');
  const [errorDialogState, setErrorDialogState] = useState(INIT_DIALOG_STATE);
  const [createDialogState, setCreateDialogState] = useState(false);

  const handleCloseDialog = () =>
    setErrorDialogState((oldState) => ({ ...oldState, dialog: false }));
  const handleIncCounter = async (id) => {
    const response = await onPostIncCounter({ id });
    if (response.status === 200) {
      const data = [...state.data];
      const index = data.findIndex((counter) => counter.id === id);
      data[index].count += 1;
      setState((oldState) => ({ ...oldState, data }));
      return response;
    }
    const { title, count } = state.data.find((counter) => counter.id === id);
    setErrorDialogState({
      dialog: true,
      title: `Couldn't update counter "${title}" to ${count + 1}`,
      message: 'The internet connection appears to be offline.',
      firstButtonLabel: 'Retry',
      firstButtonAction: () => handleIncCounter(id),
      secondButtonLabel: 'Dismiss',
      secondButtonAction: handleCloseDialog,
    });
    return response;
  };
  const handleDecCounter = async (id) => {
    const response = await onPostDecCounter({ id });
    if (response.status === 200) {
      const data = [...state.data];
      const index = data.findIndex((counter) => counter.id === id);
      data[index].count -= 1;
      setState((oldState) => ({ ...oldState, data }));
      return response;
    }
    const { title, count } = state.data.find((counter) => counter.id === id);
    setErrorDialogState({
      dialog: true,
      title: `Couldn't update "${title}" to ${count - 1}`,
      message: 'The internet connection appears to be offline.',
      firstButtonLabel: 'Retry',
      firstButtonAction: () => handleDecCounter(id),
      secondButtonLabel: 'Dismiss',
      secondButtonAction: handleCloseDialog,
    });
    return response;
  };
  const handleGetCounters = async () => {
    setState((oldData) => ({ ...oldData, isFetching: true }));
    const response = await onGetCounterList();
    setState({ data: response, isFetching: false, selected: [] });
  };
  const handleSaveCounters = async (body) => {
    const response = await onPostCounterSave(body);
    if (response.status !== 200) {
      setErrorDialogState({
        dialog: true,
        title: "Couldn't create counter",
        message: 'The internet connection appears to be offline.',
        firstButtonLabel: 'Dismiss',
        firstButtonAction: handleCloseDialog,
        secondButtonLabel: false,
        secondButtonAction: false,
      });
    }
    return response;
  };
  const handleRefresh = async () => {
    const response = await onGetCounterList();
    setState({ data: response, isFetching: false, selected: [] });
  };
  const handleSelectCounter = (selected) => {
    setState((oldState) => ({
      ...oldState,
      selected,
    }));
  };
  const handleOpenCreateDialog = () => setCreateDialogState(true);
  useEffect(() => {
    handleGetCounters();
  }, []);
  useEffect(() => {
    console.log({ state });
  }, [state]);
  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <SearchInput
          placeholder="Search Counters"
          value={input}
          setValue={setInput}
        />
        {state.isFetching ? (
          <PageLoader />
        ) : (
          <>
            <ListHeader state={state} refresh={handleRefresh} />
            <DataList
              state={state}
              refresh={handleRefresh}
              onIncrement={handleIncCounter}
              onDecrement={handleDecCounter}
              onSelect={handleSelectCounter}
            />
          </>
        )}
      </Container>
      <BottomAppBar
        hasSelection={state.selected.length}
        onAdd={handleOpenCreateDialog}
        onDelete={() => {}}
        onShare={() => {}}
      />
      <CreateDialog
        open={createDialogState}
        onClose={() => setCreateDialogState(false)}
        onSave={handleSaveCounters}
      />
      <MessageDialog
        open={errorDialogState.dialog}
        handleClose={handleCloseDialog}
        title={errorDialogState.title}
        message={errorDialogState.message}
        firstButtonLabel={errorDialogState.firstButtonLabel}
        firstButtonAction={errorDialogState.firstButtonAction}
        secondButtonLabel={errorDialogState.secondButtonLabel}
        secondButtonAction={errorDialogState.secondButtonAction}
      />
    </>
  );
};

export default CounterList;
