import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_WELCOME } from '../../constants/routes';
import { PageLoader } from '../../components/Loader';

const Welcome = lazy(() => import('./containers/Welcome'));

const WelcomeRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path={URL_WELCOME} component={Welcome} />
      </Switch>
    </Suspense>
  );
};

export default WelcomeRoutes;
