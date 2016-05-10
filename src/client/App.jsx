import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import alt from '../app/alt.js';
import Iso from 'iso';

import routes from '../app/routes/routes.js';

import './styles/main.scss';

window.onload = () => {
  // Render Isomorphically
  Iso.bootstrap((state, container) => {
    alt.bootstrap(state);

    let history = createBrowserHistory();

    // Router.run(routes.client, history, (Root, state) => {
    //   ReactDOM.render(<Root />, container);
    // });

    ReactDOM.render(
      <Router history={history}>{routes.client}</Router>,
      container
      );
  });
};

