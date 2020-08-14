import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { footerAppBarStyles } from '../styles';
import { Trash, Share } from '../../../components/Icon';

const BottomAppBar = (props) => {
  const { onAdd, selected, onDelete, onShare } = props;
  const classes = footerAppBarStyles();
  return (
    <AppBar
      position="relative"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <>
        <Divider variant="middle" />
        <Toolbar className={classes.toolbar}>
          {selected.length !== 0 && (
            <>
              <Button
                size="small"
                color="default"
                variant="contained"
                onClick={() => onDelete(selected)}
                className={classes.deleteButton}
              >
                <Trash />
              </Button>
              <Button
                size="small"
                color="default"
                variant="contained"
                onClick={onShare}
                className={classes.shareButton}
              >
                <Share />
              </Button>
            </>
          )}
          <div className={classes.grow} />
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={onAdd}
          >
            <AddIcon />
          </Button>
        </Toolbar>
      </>
    </AppBar>
  );
};
export default BottomAppBar;

BottomAppBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
};
BottomAppBar.defaultProps = {};
