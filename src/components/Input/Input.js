import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styles from './styles';

const Input = (props) => {
  const { placeholder, onFocus, value, setValue } = props;
  const classes = styles();
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleFocus = (e) => {
    onFocus(e);
  };
  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        className={classes.textField}
        placeholder={placeholder}
        value={value}
        margin="normal"
        onFocus={handleFocus}
        variant="outlined"
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
Input.defaultProps = {
  placeholder: '',
  onFocus: () => {},
};
