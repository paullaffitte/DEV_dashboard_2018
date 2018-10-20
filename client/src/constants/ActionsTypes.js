import keyMirror from 'key-mirror';

const ActionsTypes = keyMirror({
  SETUP_APP: null,

  // Users
  GET_CURRENT_USER: null,
  GET_CURRENT_USER_SUCCESS: null,
  LOGIN: null,
  LOGOUT: null,
  CREATE_USER: null,

  // Widgets
  ADD_WIDGET: null,
  ADD_WIDGET_SUCCESS: null,
  UPDATE_WIDGET: null,
  UPDATE_WIDGET_SUCCESS: null,
  REMOVE_WIDGET: null,
  REMOVE_WIDGET_SUCCESS: null,
});

export default ActionsTypes;
