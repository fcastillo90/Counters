import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { listStyles } from '../styles';
import { NoData } from '../../../components/Message';
import { Picker } from '../../../components/Picker';
import ListHeader from './ListHeader';
import { PageLoader } from '../../../components/Loader';
import { SearchInput } from '../../../components/Input';
import { INIT_COUNTERLIST_STATE } from '../../../constants';
import { CounterContext } from '../../../utils/CounterContext';

const DataList = (props) => {
  const { onIncrement, onDecrement, onRefresh } = props;
  const { state, setState } = useContext(CounterContext);
  const classes = listStyles();
  const handleSearch = (data) => setState({ ...INIT_COUNTERLIST_STATE, data });
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
  const ComponentToRender = () => {
    if (state.isFetching) {
      return <PageLoader />;
    }
    if (state.data.length === 0) {
      return <NoData />;
    }
    return (
      <>
        <ListHeader state={state} refresh={onRefresh} />
        <Container maxWidth="sm" disableGutters className={classes.root}>
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
              active={Boolean(state.selected.find((value) => value === id))}
            />
          ))}
        </Container>
      </>
    );
  };
  return (
    <>
      <SearchInput
        placeholder="Search Counters"
        data={state.data}
        onSearch={handleSearch}
        onFocus={console.log}
      />
      <ComponentToRender />
    </>
  );
};
export default DataList;

DataList.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};
DataList.defaultProps = {};
