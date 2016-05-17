import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import alt from '../app/alt.js';
import Iso from 'iso';

import routes from '../app/routes/routes.js';

import './styles/main.scss';

window.onload = () => {
  // Render Isomorphically
  Iso.bootstrap((state, container) => {
    alt.bootstrap(state);

    const appHistory = useScroll(useRouterHistory(createBrowserHistory))();

    ReactDOM.render(
      <Router history={appHistory}>{routes.client}</Router>,
      container
    );
  });
};

