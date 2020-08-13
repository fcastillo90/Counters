import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { footerAppBarStyles } from '../styles';

const BottomAppBar = (props) => {
  const { onAdd } = props;
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
};
BottomAppBar.defaultProps = {};
