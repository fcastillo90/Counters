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
import clsx from 'clsx';
import { createDialogStyle } from './styles';
import { Input } from '../Input';
import BadgePicker from '../Picker/BadgePicker';
import { EXAMPLES } from '../../constants/examples';
import { PageLoader } from '../Loader';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const INIT_INPUT = { title: '' };

const CreateDialog = ({ open, onClose, onSave }) => {
  const fullScreen = useMediaQuery('(max-width:600px)');
  const [input, setInput] = useState(INIT_INPUT);
  const [working, setWorking] = useState(false);
  const [exampleState, setExampleState] = useState(false);
  const classes = createDialogStyle();
  const handleWrite = (title) => {
    setInput({ title });
  };
  const handleClose = () => {
    if (!exampleState) {
      onClose(false);
      setInput(INIT_INPUT);
    } else {
      setExampleState(false);
    }
  };
  const handleSave = async () => {
    setWorking(true);
    const response = await onSave(input);
    setWorking(false);
    if (response.status === 200) {
      onClose(false);
      setInput(INIT_INPUT);
    }
  };
  const handleSelectExample = async (title) => {
    const response = await onSave({ title });
    if (response.status === 200) {
      onClose(false);
      setInput(INIT_INPUT);
      setExampleState(false);
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
            {exampleState ? (
              <Typography className={classes.title}>Examples</Typography>
            ) : (
              <>
                <Typography className={classes.title}>
                  Create counter
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  disabled={input.title === ''}
                >
                  Save
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Divider />
        <Container
          className={clsx(classes.inputContainer, {
            [classes.exampleOverflow]: exampleState,
          })}
        >
          {!exampleState ? (
            <>
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
                <Link
                  color="inherit"
                  underline="always"
                  onClick={() => setExampleState(true)}
                >
                  See examples.
                </Link>
              </Typography>
              {working && (
                <div className={classes.loaderContainer}>
                  <PageLoader />
                </div>
              )}
            </>
          ) : (
            <>
              <div className={classes.exampleTitle}>
                <Typography variant="caption" className={classes.inputCaption}>
                  Select an example to add it to your counters.
                </Typography>
              </div>
              {EXAMPLES.map((example) => (
                <BadgePicker
                  key={example.label}
                  label={example.label}
                  data={example.data}
                  onSelect={handleSelectExample}
                />
              ))}
            </>
          )}
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
