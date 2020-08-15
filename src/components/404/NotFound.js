import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { styles } from './styles';
import { URL_WELCOME } from '../../constants/routes';

const Welcome = () => {
  const history = useHistory();
  const classes = styles();
  const handleRedirect = () => history.push(URL_WELCOME);
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item />
        <Grid item>
          <Typography variant="h1" className={classes.title} align="center">
            Oops!
          </Typography>
          <Typography variant="body1" className={classes.body} align="center">
            We can&apos;t seem to find the page you&apos;re looking for.
            Embarrassing...
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleRedirect}>
            Return home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
