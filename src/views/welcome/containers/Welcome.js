import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { styles } from '../styles';
import { Logo } from '../../../components/Icon';
import { URL_COUNTERS } from '../../../constants/routes';

const Welcome = () => {
  const history = useHistory();
  const classes = styles();
  const handleStart = () => history.push(URL_COUNTERS);
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item>
          <Logo className={classes.logo} />
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.title} align="center">
            Welcome to Counters
          </Typography>
          <Typography variant="body1" className={classes.body} align="center">
            Capture cups of lattes, frapuccinos, or anything else that can be
            counted.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleStart}>
            Get started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
