import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h2><Link to="/">NYPL Rocks!</Link></h2>
        <ul>
          <li><Link to={'/angular'}>Angular Apps</Link></li>
          <li><Link to={'/react'}>React Apps</Link></li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
