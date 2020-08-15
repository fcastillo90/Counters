import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import theme from '../utils/palette';
import MainRoutes from './main';
import WelcomeRoutes from './welcome';
import Preview from '../preview';
import { PageLoader } from '../components/Loader';
import { URL_WELCOME, URL_COUNTERS } from '../constants/routes';
import { NotFound } from '../components/404';

const App = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Switch>
            <Route exact path="/preview" component={() => <Preview />} />
            <Route exact path="/loader" component={() => <PageLoader />} />
            <Route
              exact
              path="/"
              component={() => <Redirect to={URL_WELCOME} />}
            />
            <Route path={URL_WELCOME} component={WelcomeRoutes} />
            <Route path={URL_COUNTERS} component={MainRoutes} />
            <Route path="*" component={() => <NotFound />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Box>
  );
};

export default App;
