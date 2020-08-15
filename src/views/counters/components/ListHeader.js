import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import clsx from 'clsx';
import { listStyles } from '../styles';

const ListHeader = (props) => {
  const { state, refresh } = props;
  const [refreshState, setRefreshState] = useState(false);
  const classes = listStyles();
  const getTotalCount = (counters) => {
    let total = 0;
    counters.forEach((counter) => {
      total += counter.count;
    });
    return total;
  };
  const handleRefresh = async () => {
    setRefreshState(true);
    await refresh();
    setRefreshState(false);
  };
  return (
    <div>
      {state.selected.length !== 0 ? (
        <Typography
          display="inline"
          color="primary"
          variant="subtitle1"
          className={classes.typoItems}
        >
          {state.selected.length} selected
        </Typography>
      ) : (
        <>
          <Typography
            display="inline"
            variant="subtitle1"
            className={classes.typoItems}
          >
            {state.data.length} items
          </Typography>
          <Typography
            display="inline"
            variant="subtitle2"
            className={classes.typoTimes}
          >
            {getTotalCount(state.data)} times
          </Typography>
        </>
      )}
      <IconButton
        edge="start"
        className={clsx(classes.replayButton, {
          [classes.rotate]: refreshState,
        })}
        onClick={handleRefresh}
      >
        <ReplayIcon className={classes.replayIcon} />
      </IconButton>

      {refreshState && (
        <Typography
          display="inline"
          variant="subtitle2"
          className={clsx(classes.typoTimes, classes.typoRefresh)}
        >
          Refreshing...
        </Typography>
      )}
    </div>
  );
};
export default ListHeader;

ListHeader.propTypes = {
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
  refresh: PropTypes.func.isRequired,
};
ListHeader.defaultProps = {};
