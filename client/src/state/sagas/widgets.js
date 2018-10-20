import {
  put,
  select,
  takeEvery,
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
    updated = updated.widgets.find(w => w.id === id);
    yield put(ActionCreators.addWidgetSuccess(updated));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.error(error);
    // yield put(ActionCreators.apiError(error));
  }
};

const updateWidget = function* (action) {
  const userId = yield select(state => state.app.currentUser._id);
  const id = action.payload.id;
  try {
    // yield put(ActionCreators.apiLoading(true));
    let updated = yield feathersClient.service('users').patch(
      { "_id": userId, "widgets.id": id },
      { $set: { "widgets.0.config": action.payload.config }},
    );
    yield put(ActionCreators.updateWidgetSuccess(id, action.payload.config));
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
      $pull: {widgets: {id: action.payload.id}},
    });
    yield put(ActionCreators.removeWidgetSuccess(action.payload.id));
    // yield put(ActionCreators.apiLoading(false));
  } catch (error) {
    console.error(error);
    // yield put(ActionCreators.apiError(error));
  }
};

const sagas = function* () {
  yield takeEvery(ActionsTypes.ADD_WIDGET, addWidget);
  yield takeEvery(ActionsTypes.REMOVE_WIDGET, removeWidget);
  yield takeEvery(ActionsTypes.UPDATE_WIDGET, updateWidget);
};

export default sagas;
