import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_COUNTERS } from '../../constants/routes';
import { PageLoader } from '../../components/Loader';
import { CounterProvider } from '../../utils/CounterContext';

const CounterList = lazy(() => import('./containers/CounterList'));

const CounterRoutes = () => {
  return (
    <CounterProvider>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path={URL_COUNTERS} component={CounterList} />
        </Switch>
      </Suspense>
    </CounterProvider>
  );
};

export default CounterRoutes;
