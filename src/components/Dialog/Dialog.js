import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import styles from './styles';

const Dialog = (props) => {
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
    <MuiDialog
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
        {secondButtonLabel !== '' && (
          <Button
            onClick={secondButtonAction}
            variant="contained"
            color="default"
          >
            {secondButtonLabel}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  firstButtonLabel: PropTypes.string.isRequired,
  firstButtonAction: PropTypes.func.isRequired,
  secondButtonLabel: PropTypes.string,
  secondButtonAction: PropTypes.func,
};
Dialog.defaultProps = {
  secondButtonAction: () => {},
  secondButtonLabel: '',
};
