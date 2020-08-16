import React, { useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import { listStyles } from '../styles';
import { NoData } from '../../../components/Message';
import { Picker } from '../../../components/Picker';
import ListHeader from './ListHeader';
import { PageLoader } from '../../../components/Loader';
import { SearchInput } from '../../../components/Input';
import { INIT_COUNTERLIST_STATE } from '../../../constants';
import { CounterContext } from '../../../utils/CounterContext';

const DataList = (props) => {
  const {
    onIncrement,
    onDecrement,
    onRefresh,
    isDialogCreateDialogOpen,
  } = props;
  const { state, setState } = useContext(CounterContext);
  const [value, setValue] = useState('');
  const [lightContainer, setLightContainer] = useState(false);
  const classes = listStyles();
  const handleSearch = (data) => {
    if (lightContainer) setLightContainer(false);
    setState({ ...INIT_COUNTERLIST_STATE, data });
  };
  const handleSelection = (id, currentState) => {
    let selected = [];
    if (!currentState) {
      selected = [...state.selected, id];
    } else {
      selected = state.selected.filter((counterId) => counterId !== id);
    }
    setState((oldState) => ({
      ...oldState,
      selected,
    }));
  };
  const handleRefresh = () => {
    if (value !== '') setValue('');
    onRefresh();
  };
  const ComponentToRender = () => {
    if (state.isFetching) {
      return <PageLoader />;
    }
    if (state.data.length === 0) {
      return <NoData />;
    }
    return (
      <>
        <ListHeader state={state} refresh={handleRefresh} />
        {state.data.map(({ id, title, count, display }) => (
          <Picker
            key={id}
            label={title}
            number={count}
            display={display}
            onRemove={() => {
              onDecrement(id);
            }}
            onAdd={() => {
              onIncrement(id);
            }}
            onSelect={(currentState) => {
              handleSelection(id, currentState);
            }}
            active={Boolean(
              state.selected.find((counterId) => counterId === id)
            )}
          />
        ))}
      </>
    );
  };
  const handleFocus = () => {
    if (value === '' && !lightContainer) setLightContainer(true);
    else if (lightContainer && value !== '') setLightContainer(false);
  };
  const handleOpenCreateDialog = useCallback(() => {
    if (isDialogCreateDialogOpen && value !== '') setValue('');
  }, [isDialogCreateDialogOpen, value]);
  useEffect(() => {
    handleOpenCreateDialog();
  }, [isDialogCreateDialogOpen, handleOpenCreateDialog]);
  return (
    <>
      <Container
        maxWidth="sm"
        className={clsx(classes.root, {
          [classes.lightContainer]: lightContainer,
        })}
      >
        <SearchInput
          placeholder="Search Counters"
          data={state.data}
          onSearch={handleSearch}
          onFocus={handleFocus}
          value={value}
          setValue={setValue}
        />
        <ComponentToRender />
      </Container>
    </>
  );
};
export default DataList;

DataList.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  isDialogCreateDialogOpen: PropTypes.bool.isRequired,
};
DataList.defaultProps = {};
