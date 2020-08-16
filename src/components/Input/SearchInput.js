import React from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment,
  TextField,
  Button,
  AppBar,
  Container,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';
import { getArrayFiltered } from '../../utils';

const SearchInput = (props) => {
  const { placeholder, data, onSearch, onFocus, value, setValue } = props;
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
  const handleCancel = () => {
    setValue('');
    const response = getArrayFiltered({
      value: '',
      array: data,
      key: 'title',
    });
    onSearch(response);
  };
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Container maxWidth="sm" disableGutters className={classes.root}>
        <TextField
          fullWidth
          className={classes.textField}
          placeholder={placeholder}
          value={value}
          margin="normal"
          onBlur={() => onFocus(false)}
          onFocus={() => onFocus(true)}
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
      </Container>
    </AppBar>
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
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
SearchInput.defaultProps = {
  placeholder: '',
  onFocus: () => {},
};
