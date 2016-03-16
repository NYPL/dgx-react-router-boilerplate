import BookActions from '../actions/Actions.js';
import alt from '../alt.js';

class Store {
  constructor() {
    this.bindListeners({
      updateAngularApps: BookActions.UPDATE_ANGULAR_APPS,
      updateReactApps: BookActions.UPDATE_REACT_APPS,
    });

    this.on('init', () => {
      this._angularApps = [];
      this._reactApps = [];
    });
  }

  updateAngularApps(data) {
    this._angularApps = data;
  }

  updateReactApps(data) {
    this._reactApps = data;
  }
}

export default alt.createStore(Store, 'Store');
