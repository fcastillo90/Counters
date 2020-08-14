import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { listStyles } from '../styles';
import { NoData } from '../../../components/Message';
import { Picker } from '../../../components/Picker';

const DataList = (props) => {
  const { state, onIncrement, onDecrement, onSelect } = props;
  const classes = listStyles();
  const handleSelection = (id, currentState) => {
    let selected = [];
    if (!currentState) {
      selected = [...state.selected, id];
    } else {
      selected = state.selected.filter((counterId) => counterId !== id);
    }
    onSelect(selected);
  };
  return (
    <>
      {state.data.length === 0 ? (
        <NoData />
      ) : (
        <Container maxWidth="sm" disableGutters className={classes.root}>
          {state.data.map((counter) => (
            <Picker
              key={counter.id}
              label={counter.title}
              number={counter.count}
              onRemove={() => {
                onDecrement(counter.id);
              }}
              onAdd={() => {
                onIncrement(counter.id);
              }}
              onSelect={(currentState) => {
                handleSelection(counter.id, currentState);
              }}
              active={Boolean(state.selected.find((id) => id === counter.id))}
            />
          ))}
        </Container>
      )}
    </>
  );
};
export default DataList;

DataList.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number,
        id: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    isFetching: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
DataList.defaultProps = {};
