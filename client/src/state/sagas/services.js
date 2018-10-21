import {
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import ActionsTypes from '../../constants/ActionsTypes';
import feathersClient from '../../services/feathersClient';
import ActionCreators from '../actions';

const subscribeService = function* (action) {
  const userId = yield select(state => state.app.currentUser._id);
  const id = action.payload.id;
  try {
    // yield put(ActionCreators.apiLoading(true));
    yield feathersClient.service('users').patch(
      { "_id": userId },
      { $set: { [action.payload.service]: action.payload.values }},
    );
    yield put(ActionCreators.subscribeServiceSuccess(action.payload.service, action.payload.values));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.log(error);
    // yield put(ActionCreators.apiError(error));
  }
};

const sagas = function* () {
  yield takeEvery(ActionsTypes.SUBSCRIBE_SERVICE, subscribeService);
};

export default sagas;
