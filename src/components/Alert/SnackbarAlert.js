import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    '& .MuiSnackbar-anchorOriginBottomCenter': {
      bottom: 86,
    },
  },
}));

const SnackbarAlert = ({ open, setOpen, title, colorCase }) => {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={colorCase}
          variant="standard"
          elevation={0}
        >
          {title}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default SnackbarAlert;

SnackbarAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  colorCase: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};
SnackbarAlert.defaultProps = {
  title: 'Success',
  colorCase: 'success',
};
