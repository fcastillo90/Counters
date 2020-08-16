import React, { useState, useEffect, useContext } from 'react';
import BottomAppBar from '../components/BottomAppBar';
import {
  onGetCounterList,
  onPostCounterSave,
  onPostIncCounter,
  onPostDecCounter,
  onDeleteCounter,
} from '../model';
import DataList from '../components/DataList';
import CreateDialog from '../../../components/Dialog/CreateDialog';
import MessageDialog from '../../../components/Dialog/MessageDialog';
import { INIT_COUNTERLIST_DIALOG_STATE } from '../../../constants';
import { CounterContext } from '../../../utils/CounterContext';

const CounterList = () => {
  const { state, setState } = useContext(CounterContext);
  const [errorDialogState, setErrorDialogState] = useState(
    INIT_COUNTERLIST_DIALOG_STATE
  );
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
      title: `Couldn't update "${title}" to ${count + 1}`,
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
    setState({
      data: response.status !== 200 ? [] : response.data,
      isFetching: false,
      selected: [],
    });
  };
  const handleSaveCounters = async (body) => {
    const findCounter = state.data.find(
      (counter) => counter.title === body.title
    );
    if (findCounter === undefined) {
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
    }
    const response = await handleIncCounter(findCounter.id);
    return response;
  };
  const handleRefresh = async () => {
    const response = await onGetCounterList();
    if (response.status === 200)
      setState({ data: response.data, isFetching: false, selected: [] });
  };
  const handleOpenCreateDialog = () => setCreateDialogState(true);
  const handleCloseCreateDialog = () => {
    setCreateDialogState(false);
    handleRefresh();
  };
  const handleDeleteSingleCounter = async (id) => {
    const response = await onDeleteCounter({ id });
    return { ...response, id };
  };
  const handleDeleteArrayOfCounters = async (arrayToDelete) => {
    const promises = arrayToDelete.map(async (id) => {
      const response = await handleDeleteSingleCounter(id);
      return response;
    });
    const resolved = await Promise.all(promises);
    const withError = resolved.filter(
      (deleteApiResponse) => deleteApiResponse.status !== 200
    );
    if (withError.length !== 0) {
      let title = '';
      if (withError.length === 1) {
        title = `Couldn't delete ${
          state.data.find((counter) => counter.id === withError[0].id).title
        }`;
      } else {
        title = `Couldn't delete ${withError.length} counters`;
      }
      const arrayToRetry = withError.map((counter) => counter.id);
      setErrorDialogState({
        dialog: true,
        title,
        message: 'The internet connection appears to be offline.',
        firstButtonLabel: 'Retry',
        firstButtonAction: () => handleDeleteArrayOfCounters(arrayToRetry),
        secondButtonLabel: 'Dismiss',
        secondButtonAction: handleCloseDialog,
      });
    } else if (errorDialogState.dialog === true) {
      setErrorDialogState(INIT_COUNTERLIST_DIALOG_STATE);
    }
    handleRefresh();
  };
  const handleConfirmDelete = (arrayToDelete) => {
    let title = '';
    if (arrayToDelete.length === 1) {
      title = `Delete the ${
        state.data.find((counter) => counter.id === arrayToDelete[0]).title
      } counter?`;
    } else {
      title = `Delete ${arrayToDelete.length} counters?`;
    }
    setErrorDialogState({
      dialog: true,
      title,
      message: 'This cannot be undone',
      firstButtonLabel: 'Cancel',
      firstButtonAction: handleCloseDialog,
      secondButtonLabel: 'Delete',
      secondButtonAction: () => {
        handleCloseDialog();
        handleDeleteArrayOfCounters(arrayToDelete);
      },
    });
  };
  useEffect(() => {
    handleGetCounters();
  }, []);
  return (
    <>
      <DataList
        onRefresh={handleRefresh}
        onIncrement={handleIncCounter}
        onDecrement={handleDecCounter}
        isDialogCreateDialogOpen={createDialogState}
      />
      <BottomAppBar
        onAdd={handleOpenCreateDialog}
        onDelete={handleConfirmDelete}
      />
      <CreateDialog
        open={createDialogState}
        onClose={handleCloseCreateDialog}
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
