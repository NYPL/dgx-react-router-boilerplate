import BookActions from '../actions/Actions.js';
import alt from '../alt.js';
import immutable from 'alt-utils/lib/ImmutableUtil';
import Immutable from 'immutable';

class Store {
  constructor() {
    this.bindListeners({
      updateAngularApps: BookActions.UPDATE_ANGULAR_APPS,
      updateReactApps: BookActions.UPDATE_REACT_APPS,
    });

    this.state = Immutable.Map({
      _angularApps: Immutable.List([]),
      _reactApps: Immutable.List([]),
    })
  }

  updateAngularApps(data) {
    const id = String(Math.random());
    this.setState(this.state.setIn(['_angularApps', id], data));
  }

  updateReactApps(data) {
    const id = String(Math.random());
    this.setState(this.state.setIn(['_reactApps', id], data));
  }

  getImmutState() {
    return Immutable.fromJS(this.getState());
  }
}

Store.displayName = 'Store';

export default alt.createStore(immutable(Store));
