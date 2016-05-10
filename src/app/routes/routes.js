// React libraries
import React from 'react';
// Import Router
import { DefaultRoute, Route } from 'react-router';
// Import components
import Application from '../components/Application/Application.jsx';
import ReactApps from '../components/Lists/ReactApps.jsx';
import AngularApps from '../components/Lists/AngularApps.jsx';

const routes = {
  client: (
    <Route path="/" component={Application}>
      <Route path="angular" component={AngularApps} />
      <Route path="react" component={ReactApps} />
    </Route>
  ),
  server: (
    <Route path="/" component={Application}>
      <Route path="angular" component={AngularApps} />
      <Route path="react" component={ReactApps} />
    </Route>
  ),
};

export default routes;
