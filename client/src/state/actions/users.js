import ActionsTypes from '../../constants/ActionsTypes';

const users = {
  login: (email, password) => ({
    type: ActionsTypes.LOGIN,
    payload: { email, password },
  }),
  logout: (email, password) => ({
    type: ActionsTypes.LOGOUT,
  }),
  getCurrentUser: () => ({
    type: ActionsTypes.GET_CURRENT_USER,
  }),
  getCurrentUserSuccess: (user) => ({
    type: ActionsTypes.GET_CURRENT_USER_SUCCESS,
    payload: { user },
  }),
  createUser: (user) => ({
    type: ActionsTypes.CREATE_USER,
    payload: { user },
  }),
};

export default users;
