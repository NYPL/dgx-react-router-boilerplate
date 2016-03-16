import React from 'react';
import Router from 'react-router';

import Store from '../../stores/Store.js';

const RouteHandler = Router.RouteHandler;
const Navigation = Router.Navigation;
const App = React.createClass({
  getInitialState() {
    return Store.getState();
  },

  mixins: [Navigation],
  
  render() {
    let angularApps = this._getList(this.state._angularApps),
      reactApps = this._getList(this.state._reactApps);

    return (
      <div className='app-wrapper'>
        <h2>NYPL Rocks!</h2>
        <p><a onClick={this.transitionTo.bind(this, 'angularApps')}>Angular Apps</a></p>
        <p><a onClick={this.transitionTo.bind(this, 'reactApps')}>React Apps</a></p>

        <RouteHandler {...this.props} />
      </div>
    );
  },

  // Helper functions below the render() function:
  _getList(appsArray) {
    return appsArray.map((appName, index) => {
      return (<li key={index}>{appName}</li>);
    });
  },
});

export default App;
