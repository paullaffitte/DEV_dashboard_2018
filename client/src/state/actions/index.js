import app from './app';
import users from './users';
import widgets from './widgets';
import services from './services';

const ActionCreators = {
  ...app,
  ...users,
  ...widgets,
  ...services,
};

export default ActionCreators;
