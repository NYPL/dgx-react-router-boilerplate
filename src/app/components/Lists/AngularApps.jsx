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
    return appsArray.map((appName, index) => {
      return (<li key={index}>{appName}</li>);
    });
  }
  
  render() {
    const angularApps = this.getList(this.state.get('angularApps'));

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
