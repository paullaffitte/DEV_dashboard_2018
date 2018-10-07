import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import ActionsTypes from '../../constants/ActionsTypes';
import ActionCreators from '../actions';

const setupApp = function* () {

};

const sagas = function* () {
  yield takeLatest(ActionsTypes.SETUP_APP, setupApp);
};

export default sagas;
