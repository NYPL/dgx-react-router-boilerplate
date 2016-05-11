import React from 'react';

import Store from '../../stores/Store.js';

class ReactApps extends React.Component {
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
    const reactApps = this.getList(this.state.get('reactApps'));

    return (
      <div className='app-wrapper'>
        <p>Our React Apps</p>
        <ul>
          {reactApps}
        </ul>
      </div>
    );
  }
}

export default ReactApps;
