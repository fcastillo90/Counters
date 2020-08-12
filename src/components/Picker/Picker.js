import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import clsx from 'clsx';
import styles from './styles';

const Picker = (props) => {
  const { label, number, color, active, onSelect, onRemove, onAdd } = props;
  const classes = styles();
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={clsx(classes.mainBox, { [classes.mainBoxActive]: active })}
    >
      <Box className={classes.typoBox} onClick={onSelect} flexGrow={1}>
        <Typography variant="body1" className={classes.labelStyle}>
          {label}
        </Typography>
      </Box>
      <Box
        className={classes.innerBox}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
      >
        <IconButton
          onClick={onRemove}
          className={clsx(classes.symbols, {
            [classes.symbolsPrimary]: color === 'primary',
            [classes.symbolsSecondary]: color === 'secondary',
          })}
          aria-label="Remove"
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" className={classes.numberStyle}>
          {number}
        </Typography>
        <IconButton
          onClick={onAdd}
          className={clsx(classes.symbols, {
            [classes.symbolsPrimary]: color === 'primary',
            [classes.symbolsSecondary]: color === 'secondary',
          })}
          aria-label="Add"
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Picker;

Picker.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  active: PropTypes.bool,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
Picker.defaultProps = {
  color: 'primary',
  active: false,
  onSelect: () => {},
};
