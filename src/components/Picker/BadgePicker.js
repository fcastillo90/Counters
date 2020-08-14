import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Chip } from '@material-ui/core';
import { badgePickerStyles } from './styles';

const BadgePicker = (props) => {
  const { label, data, onSelect } = props;
  const classes = badgePickerStyles();
  return (
    <>
      <Typography variant="body1" className={classes.title}>
        {label}
      </Typography>
      <div
        style={{
          overflowX: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        {data.map((example) => (
          <Chip
            className={classes.chips}
            key={example}
            label={example}
            onClick={() => onSelect(example)}
          />
        ))}
      </div>
    </>
  );
};

export default BadgePicker;

BadgePicker.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};
BadgePicker.defaultProps = {};
