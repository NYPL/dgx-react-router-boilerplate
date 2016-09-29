import React from 'react';

import Store from '../../stores/Store.js';

class AngularApps extends React.Component {
  constructor(props) {
    super(props);

    this.state = Store.getState();
    this.getList = this.getList.bind(this);
  }

  // Helper functions below the render() function:
  getList(appsArray) {
    return appsArray.map((app, index) => (
      <li key={index}><a href={app.link}>{app.id}</a></li>
    ));
  }
  
  render() {
    const angularApps = this.getList(this.state.angularApps);

    return (
      <div className='app-wrapper'>
        <p>Our Angular Apps</p>
        <ul>
          {angularApps}
        </ul>
      </div>
    );
  }
}

export default AngularApps;
