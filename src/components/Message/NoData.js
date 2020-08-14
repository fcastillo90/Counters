import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styles } from './styles';

const NoData = () => {
  const classes = styles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Typography variant="h1" className={classes.title} align="center">
        No counters yet
      </Typography>
      <Typography variant="body1" className={classes.body} align="center">
        “When I started counting my blessings, my whole life turned around.”
      </Typography>
      <Typography variant="body1" className={classes.quote} align="center">
        —Willie Nelson
      </Typography>
    </Box>
  );
};

export default NoData;

NoData.propTypes = {};
NoData.defaultProps = {};
