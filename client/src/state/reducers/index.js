import app from './app';
import users from './users';
import widgets from './widgets';
import initialState from '../initialState';

const reducersMap = {
  ...app,
  ...users,
  ...widgets,
  leaveStateUnchanged: state => state,
};

const reducers = function reducers(state = initialState, action) {
  const reducer = reducersMap[action.type] || reducersMap.leaveStateUnchanged;
  const newState = reducer(state, action.payload, action.meta);
  return newState;
};

export default reducers;
