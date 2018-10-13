import app from './app';
import users from './users';
import widgets from './widgets';

const ActionCreators = {
  ...app,
  ...users,
  ...widgets,
};

export default ActionCreators;
