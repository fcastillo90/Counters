import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import theme from '../utils/palette';
import MainRoutes from './main';
import Preview from '../preview';
import { PageLoader } from '../components/Loader';

const App = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Switch>
            <Route exact path="/preview" component={() => <Preview />} />
            <Route exact path="/loader" component={() => <PageLoader />} />
            <Route path="/" component={MainRoutes} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Box>
  );
};

export default App;
