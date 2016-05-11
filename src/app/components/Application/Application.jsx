import React from 'react';
import Router from 'react-router';

const RouteHandler = Router.RouteHandler;
const Navigation = Router.Navigation;
const App = React.createClass({
  mixins: [Navigation],
  
  render() {

    return (
      <div className='app-wrapper'>
        <h2>NYPL Rocks!</h2>
        <ul>
          <li><a onClick={this.transitionTo.bind(this, 'angularApps')}>Angular Apps</a></li>
          <li><a onClick={this.transitionTo.bind(this, 'reactApps')}>React Apps</a></li>
        </ul>

        <RouteHandler {...this.props} />
      </div>
    );
  },
});

export default App;
