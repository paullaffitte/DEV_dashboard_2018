import { fork } from 'redux-saga/effects';
import app from './app';
import users from './users';
import widgets from './widgets';
import services from './services';

const sagas = function* () {
  yield [
    fork(users),
    fork(widgets),
    fork(app),
    fork(services),
  ];
}

export default sagas;
