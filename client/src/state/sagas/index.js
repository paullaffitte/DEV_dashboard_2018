import { fork } from 'redux-saga/effects';
import app from './app';
import users from './users';
import widgets from './widgets';

const sagas = function* () {
  yield [
    fork(users),
    fork(widgets),
    fork(app),
  ];
}

export default sagas;
