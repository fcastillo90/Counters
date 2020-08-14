import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { styles } from './styles';

const MessageDialog = (props) => {
  const {
    open,
    handleClose,
    title,
    message,
    firstButtonLabel,
    firstButtonAction,
    secondButtonLabel,
    secondButtonAction,
  } = props;
  const classes = styles();
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className={classes.dialogTitle} id="dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogContent} align="center">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={firstButtonAction} variant="contained" color="primary">
          {firstButtonLabel}
        </Button>
        {typeof secondButtonLabel !== 'boolean' &&
          typeof secondButtonAction !== 'boolean' && (
            <Button
              onClick={secondButtonAction}
              variant="contained"
              color="default"
            >
              {secondButtonLabel}
            </Button>
          )}
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog;

MessageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  firstButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  firstButtonAction: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  secondButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  secondButtonAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
MessageDialog.defaultProps = {
  firstButtonAction: false,
  firstButtonLabel: false,
  secondButtonAction: false,
  secondButtonLabel: false,
};
