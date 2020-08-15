/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  ClickAwayListener,
  Typography,
  Button,
} from '@material-ui/core';
import { PaperNote } from '../Icon/Note';
import { styles } from './styles';

const ShareTooltip = ({ children, onClose, open, count, onShare }) => {
  const classes = styles();
  return (
    <ClickAwayListener onClickAway={onClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={onClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          arrow
          interactive
          title={
            <div className={classes.shareRoot}>
              <div>
                <Typography variant="h3" className={classes.shareTypo}>
                  Share {count} counter{count > 1 && 's'}
                </Typography>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.shareButton}
                  onClick={onShare}
                >
                  Copy
                </Button>
              </div>
              <div>
                <PaperNote className={classes.noteIcon} />
              </div>
            </div>
          }
        >
          {children}
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default ShareTooltip;

ShareTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};
ShareTooltip.defaultProps = {};
