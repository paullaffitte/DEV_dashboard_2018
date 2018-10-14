import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import ActionsTypes from '../../constants/ActionsTypes';
import ActionCreators from '../actions';
import feathersClient from '../../services/feathersClient';

const fetchCurrentUser = function* (options = {}) {
  try {
    // yield put(ActionCreators.apiLoading(true));
    console.log('options', options);
    const response = yield call(feathersClient.authenticate, options);
    const payload = yield feathersClient.passport.verifyJWT(response.accessToken);
    const user = yield feathersClient.service('users').get(payload.userId);
    yield put(ActionCreators.getCurrentUserSuccess(user));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.log(error);
    // yield put(ActionCreators.apiError(error));
  }
}

const getCurrentUser = function* () {
  yield call(fetchCurrentUser);
}

const login = function* (action) {
  yield call(fetchCurrentUser, {
    strategy: 'local',
    email: action.payload.email,
    password: action.payload.password,
  });
}

const createUser = function* (action) {
  const user = action.payload.user || {};
  try {
    // yield put(ActionCreators.apiLoading(true));
    const created = yield feathersClient.service('users').create(user);
    yield put(ActionCreators.login(user.email, user.password));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.log(error);
    // yield put(ActionCreators.apiLoading(false));
    // yield put(ActionCreators.apiError(error));
  }
}

const logout = function* () {
  yield call(feathersClient.logout);
}

const sagas = function* () {
  yield takeLatest(ActionsTypes.LOGOUT, logout);
  yield takeLatest(ActionsTypes.LOGIN, login);
  yield takeLatest(ActionsTypes.GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(ActionsTypes.CREATE_USER, createUser);
};

export default sagas;
