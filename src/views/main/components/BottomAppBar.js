import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { footerAppBarStyles } from '../styles';
import { Trash, Share } from '../../../components/Icon';
import { ShareTooltip } from '../../../components/Tooltip';

const BottomAppBar = (props) => {
  const { onAdd, selected, onDelete, onShare } = props;
  const classes = footerAppBarStyles();
  const [tooltipState, setTooltipState] = useState(false);

  const handleTooltipClose = () => setTooltipState(false);
  const handleTooltipOpen = () => setTooltipState(true);
  return (
    <>
      <AppBar
        position="relative"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
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

              <ShareTooltip
                count={selected.length}
                open={tooltipState}
                onClose={handleTooltipClose}
                onShare={onShare}
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
    </>
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
