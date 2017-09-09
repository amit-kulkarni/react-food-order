import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import MenuDisplay from './containers/MenuDisplay';
import OrderConfirm from './containers/OrderConfirm';

const Routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={MenuDisplay} />
      <Route path="/order-confirm" component={OrderConfirm} />
    </Route>
  )
}

export const AppRoutes = Routes();