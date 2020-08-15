import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';
import { getArrayFiltered } from '../../utils';

const SearchInput = (props) => {
  const { placeholder, data, onSearch, onFocus } = props;
  const [value, setValue] = useState('');
  const classes = styles();

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const response = getArrayFiltered({
      value: inputValue,
      array: data,
      key: 'title',
    });
    onSearch(response);
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
        onBlur={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
        variant="outlined"
        onChange={handleSearch}
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
  onSearch: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
SearchInput.defaultProps = {
  placeholder: '',
  onFocus: () => {},
};
