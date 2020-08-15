import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Divider, Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import copy from 'copy-to-clipboard';
import { footerAppBarStyles } from '../styles';
import { Trash, Share } from '../../../components/Icon';
import { ShareTooltip } from '../../../components/Tooltip';
import { SnackbarAlert } from '../../../components/Alert';
import { CounterContext } from '../../../utils/CounterContext';

const BottomAppBar = (props) => {
  const { onAdd, onDelete } = props;
  const { state } = useContext(CounterContext);
  const classes = footerAppBarStyles();
  const [shareSuccessState, setShareSuccessState] = useState(false);
  const [tooltipState, setTooltipState] = useState(false);

  const handleTooltipClose = () => setTooltipState(false);
  const handleTooltipOpen = () => setTooltipState(true);
  const handleShareAction = () => {
    const selection = state.selected.map((id) => {
      const counterObject = state.data.find((counter) => counter.id === id);
      return counterObject;
    });
    copy(JSON.stringify(selection));
    setShareSuccessState(true);
  };
  return (
    <>
      <Divider variant="middle" />
      <Container disableGutters maxWidth="sm">
        <AppBar
          position="relative"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            {state.selected.length !== 0 && (
              <>
                <Button
                  size="small"
                  color="default"
                  variant="contained"
                  onClick={() => onDelete(state.selected)}
                  className={classes.deleteButton}
                >
                  <Trash />
                </Button>

                <ShareTooltip
                  count={state.selected.length}
                  open={tooltipState}
                  onClose={handleTooltipClose}
                  onShare={handleShareAction}
                >
                  <Button
                    size="small"
                    color="default"
                    variant="contained"
                    onClick={handleTooltipOpen}
                    className={classes.shareButton}
                  >
                    <Share />
                  </Button>
                </ShareTooltip>
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
        </AppBar>
        <SnackbarAlert
          open={shareSuccessState}
          setOpen={setShareSuccessState}
          title="Copied to clipboard!"
          colorCase="success"
        />
      </Container>
    </>
  );
};
export default BottomAppBar;

BottomAppBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
BottomAppBar.defaultProps = {};
