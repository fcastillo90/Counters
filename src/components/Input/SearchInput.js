import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

const SearchInput = ({ placeholder, onFocus, value, setValue }) => {
  const classes = styles();
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleFocus = (e) => {
    onFocus(e);
  };
  const handleCancel = () => {
    setValue('');
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
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            </>
          ),
        }}
      />
      {!!value && (
        <Button
          onClick={handleCancel}
          variant="contained"
          className={classes.button}
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
SearchInput.defaultProps = {
  placeholder: '',
  onFocus: () => {},
};
