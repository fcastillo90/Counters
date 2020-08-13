import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_WELCOME, URL_COUNTERS } from '../../constants/routes';
import { PageLoader } from '../../components/Loader';

const Welcome = lazy(() => import('./containers/Welcome'));
const CounterList = lazy(() => import('./containers/CounterList'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path={URL_WELCOME} component={Welcome} />
        <Route exact path={URL_COUNTERS} component={CounterList} />
        <Route path="*" component={() => <PageLoader />} />
      </Switch>
    </Suspense>
  );
};

export default MainRoutes;
