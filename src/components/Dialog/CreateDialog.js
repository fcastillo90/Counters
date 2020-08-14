import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import Slide from '@material-ui/core/Slide';
import { Container, Link, useMediaQuery } from '@material-ui/core';
import { createDialogStyle } from './styles';
import { Input } from '../Input';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const INIT_INPUT = { title: '' };

const CreateDialog = ({ open, onClose, onSave }) => {
  const fullScreen = useMediaQuery('(max-width:600px)');
  const [input, setInput] = useState(INIT_INPUT);
  const classes = createDialogStyle();
  const handleWrite = (title) => {
    setInput({ title });
  };
  const handleClose = () => {
    onClose(false);
    setInput(INIT_INPUT);
  };
  const handleSave = async () => {
    const response = await onSave(input);
    if (response.status === 200) {
      onClose(false);
      setInput(INIT_INPUT);
    }
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.dialogRoot}
      >
        <AppBar elevation={0} color="transparent" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CancelIcon className={classes.closeIcon} />
            </IconButton>
            <Typography className={classes.title}>Create counter</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              disabled={input.title === ''}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Divider />
        <Container className={classes.inputContainer}>
          <Typography variant="body1" className={classes.inputTitle}>
            Name
          </Typography>
          <Input
            placeholder="Cups of coffee"
            value={input.title}
            setValue={handleWrite}
          />
          <Typography variant="caption" className={classes.inputCaption}>
            Give it a name. Creative block?{' '}
            <Link color="inherit" underline="always">
              See examples.
            </Link>
          </Typography>
        </Container>
      </Dialog>
    </>
  );
};
export default CreateDialog;
CreateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
CreateDialog.defaultProps = {};
