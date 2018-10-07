import keyMirror from 'key-mirror';

const ActionsTypes = keyMirror({
  SETUP_APP: null,

  // Users
  GET_CURRENT_USER: null,
  GET_CURRENT_USER_SUCCESS: null,
  LOGIN: null,
  LOGOUT: null,
  CREATE_USER: null,
});

export default ActionsTypes;
