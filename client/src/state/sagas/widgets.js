import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import uniqid from 'uniqid';
import ActionsTypes from '../../constants/ActionsTypes';
import feathersClient from '../../services/feathersClient';
import ActionCreators from '../actions';

const addWidget = function* (action) {
  const userId = yield select(state => state.app.currentUser._id);
  const id = uniqid();
  const values = {
    $push: {
      widgets: {
        id,
        name: action.payload.name,
        config: action.payload.config,
      },
    },
  };
  try {
    // yield put(ActionCreators.apiLoading(true));
    let updated = yield feathersClient.service('users').patch(userId, values);
    updated = updated.widgets.find(w => w.id == id);
    yield put(ActionCreators.addWidgetSuccess(updated));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.log(error);
    // yield put(ActionCreators.apiError(error));
  }
};

const removeWidget = function* (action) {
  const userId = yield select(state => state.app.currentUser._id);
  try {
    // yield put(ActionCreators.apiLoading(true));
    yield feathersClient.service('users').patch(userId, {
      $pull: { widgets: { id: action.payload.id }},
    });
    yield put(ActionCreators.removeWidgetSuccess(action.payload.id));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.log(error);
    // yield put(ActionCreators.apiError(error));
  }
};

const sagas = function* () {
  yield takeEvery(ActionsTypes.ADD_WIDGET, addWidget);
  yield takeEvery(ActionsTypes.REMOVE_WIDGET, removeWidget);
};

export default sagas;
