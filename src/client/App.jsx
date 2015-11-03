import React from 'react';

import alt from '../app/alt.js';
import Iso from 'iso';

import './styles/main.scss';

import App from '../app/components/Application/Application.jsx';


window.onload = () => {
  // Render Isomorphically
  Iso.bootstrap((state, meta, container) => {
    let node = document.getElementById('app');

    console.log('Application rendered Isomorphically.');

    alt.bootstrap(state);
    React.render(<App />, container);
  });
};

