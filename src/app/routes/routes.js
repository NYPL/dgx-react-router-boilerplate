// React libraries
import React from 'react';
// Import Router
import { DefaultRoute, NotFoundRoute, Route } from 'react-router';
// Import components
import Application from '../components/Application/Application.jsx';

const routes = {
  client: (
    <Route name="root" path="/" handler={Application}>
    </Route>
  ),
  server: (
    <Route name="root" path="/" handler={Application}>
    </Route>
  ),
};

export default routes;
