import BookActions from '../actions/Actions.js';
import alt from '../alt.js';

class Store {
  constructor() {
    this.bindListeners({
      updateAngularApps: BookActions.UPDATE_ANGULAR_APPS,
      updateReactApps: BookActions.UPDATE_REACT_APPS,
    });

    this.state = {
      angularApps: [],
      reactApps: [],
    };
  }

  updateAngularApps(data) {
    this.angularApps = data;
  }

  updateReactApps(data) {
    this.reactApps = data;
  }
}

Store.displayName = 'Store';

export default alt.createStore(Store);
