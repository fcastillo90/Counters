import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { listStyles } from '../styles';
import { NoData } from '../../../components/Message';
import { Picker } from '../../../components/Picker';

const DataList = (props) => {
  const { state, onIncrement, onDecrement } = props;
  const classes = listStyles();
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
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
DataList.defaultProps = {};
