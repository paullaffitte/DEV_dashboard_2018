import {takeLatest} from 'redux-saga/effects';
import ActionsTypes from '../../constants/ActionsTypes';

const setupApp = function* () {

};

const sagas = function* () {
  yield takeLatest(ActionsTypes.SETUP_APP, setupApp);
};

export default sagas;
